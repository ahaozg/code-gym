/*
 * @Author: haozg-666 106981170+haozg-666@users.noreply.github.com
 * @Date: 2022-06-08 21:20:57
 * @LastEditors: haozg-666 106981170+haozg-666@users.noreply.github.com
 * @LastEditTime: 2022-07-10 21:10:10
 * @FilePath: /code-gym/webrtc/samples/web_server/server.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
"use strict";

var http = require("http");
var https = require("https");
var fs = require("fs");

var express = require("express");
var serveIndex = require("serve-index");

var socketIO = require("socket.io");

var log4js = require("log4js");

var userCount = 3;

log4js.configure({
  appenders: {
    file: {
      type: "file",
      filename: "app.log",
      layout: {
        type: "pattern",
        pattern: "%r %p - %m",
      },
    },
  },
  categories: {
    default: {
      appenders: ["file"],
      level: "debug",
    },
  },
});

var logger = log4js.getLogger();

var app = express();

app.use(serveIndex("./public"));
app.use(express.static("./public"));

var http_server = http.createServer(app).listen(80, "0.0.0.0");

var options = {
  key: fs.readFileSync("./../../cert/ssl.key"),
  cert: fs.readFileSync("./../../cert/ssl.crt"),
};

var https_server = https.createServer(options, app);

var io = socketIO(https_server);
io.sockets.on("connection", (socket) => {
  socket.on("join", (roomID) => {
    socket.join(roomID);
    var myRoom = io.sockets.adapter.rooms.get(roomID);
    var userLength = myRoom.size;
    logger.log(`此时roomID:${roomID}的房间内有${userLength}人`);
    if (userLength > userCount) {
      socket.leave();
      socket.emit("full", roomID, socket.id);
    } else {
      socket.emit("joined", roomID, socket.id);
      if (userLength > 1) {
        socket.to(roomID).emit('otherJoined', room, socket.id);
      }
    }
    // 房间内除自己之外的人
    // socket.to(roomID).emit("joined", roomID, socket.id);
    // 房间内所有人
    // io.in(roomID).emit("joined", roomID, socket.id);
    // 除自己所有人
    // socket.broadcast.emit("joined", roomID, socket.id);
  });

  socket.on("leave", (roomID) => {
    var myRoom = io.sockets.adapter.rooms.get(roomID);
    var userLength = myRoom.size - 1;
    logger.log(`此时roomID:${roomID}的房间内有${userLength}人`);
    socket.to(roomID).emit("bay", roomID, socket.id);
    socket.emit("leaved", roomID, socket.id);
    // 房间内除自己之外的人
    // socket.to(roomID).emit("leaved", roomID, socket.id);
    // 房间内所有人
    // io.in(roomID).emit("leaved", roomID, socket.id);
    // 除自己所有人
    // socket.broadcast.emit("leaved", roomID, socket.id);
    socket.leave(roomID);
  });

  socket.on("message", (roomID, data) => {
    // 房间内所有人
    // io.in(roomID).emit("message", roomID, socket.id, data);
    socket.to(roomID).emit("message", roomID, socket.id); 
  });
});

https_server.listen(443, "0.0.0.0");
