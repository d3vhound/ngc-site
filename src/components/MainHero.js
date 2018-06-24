 /* eslint-disable */
import React, { Component } from 'react'
import { Link } from 'gatsby'
import { setInterval } from 'timers';

class MainHero extends Component {

  componentDidMount() {
    (function () {
      let cvs, ctx;
      let waves = [];
      let waveHeight = 75;
      let colours = ["#393895", "#ac2e74", "#f78f1d", "#f6f388"];

      function init() {
        cvs = document.getElementById("canvas");
        ctx = cvs.getContext("2d");
        resizeCanvas(cvs)

        for (let i = 0; i < 4; i++) {
          var temp = new wave(colours[i], 1, 6)
        }

        setInterval(update, 16)
      }

      const update = (array) => {
        var fill = window.getComputedStyle(document.querySelector(".herov2"), null).getPropertyValue("background-color");
        ctx.fillStyle = fill;
        ctx.globalCompositeOperation = "source-over";
        ctx.fillRect(0, 0, cvs.width, cvs.height);
        ctx.globalCompositeOperation = "screen";
        for (var i = 0; i < waves.length; i++) {
          for (var j = 0; j < waves[i].nodes.length; j++) {
            bounce(waves[i].nodes[j]);
          }
          drawWave(waves[i]);
        }
        ctx.globalCompositeOperation = "hue";
        ctx.fillStyle = fill;
      }

      function wave(colour, lambda, nodes) {
        this.colour = colour;
        this.lambda = lambda;
        this.nodes = [];
        var tick = 1;
        for (var i = 0; i <= nodes + 2; i++) {
          var temp = [(i - 1) * cvs.width / nodes, 0, Math.random() * 200, .3];
          this.nodes.push(temp);
          console.log(temp);
        }
        console.log(this.nodes);
        waves.push(this);
      }

      function bounce(node) {
        node[1] = waveHeight / 2 * Math.sin(node[2] / 20) + cvs.height / 2;
        node[2] = node[2] + node[3];
      }

      function drawWave(obj) {
        var diff = function (a, b) {
          return (b - a) / 2 + a;
        }
        ctx.fillStyle = obj.colour;
        ctx.beginPath();
        ctx.moveTo(0, cvs.height);
        ctx.lineTo(obj.nodes[0][0], obj.nodes[0][1]);
        for (var i = 0; i < obj.nodes.length; i++) {
          if (obj.nodes[i + 1]) {
            ctx.quadraticCurveTo(
              obj.nodes[i][0], obj.nodes[i][1],
              diff(obj.nodes[i][0], obj.nodes[i + 1][0]), diff(obj.nodes[i][1], obj.nodes[i + 1][1])
            );
          } else {
            ctx.lineTo(obj.nodes[i][0], obj.nodes[i][1]);
            ctx.lineTo(cvs.width, cvs.height);
          }

        }
        ctx.closePath();
        ctx.fill();
      }

      function resizeCanvas(canvas, width, height) {
        if (width && height) {
          canvas.width = width;
          canvas.height = height;
        } else {
          if (window.innerHeight > 1920) {
            canvas.width = window.innerWidth;
          }
          else {
            canvas.width = 1920;
          }

          canvas.height = waveHeight;
        }

      }

      document.addEventListener("DOMContentLoaded", init(), false);
    })();
  }

  render() {
    return (
    <>
    <section className="section herov2">
      <div className="container has-text-centered" >
        <div className="columns">
  
          <div className="column">
            <h1 className="hero-title">NextGen Code Company</h1>
            <h2>Innovative Software Development</h2>
            <Link to="/">
              <button>Get started</button>
            </Link>
          </div>
  
  
        </div>
      </div>
    </section>
    <div className="canvas-wrap">
      <canvas id="canvas"></canvas>
    </div>
    </>
    )
  }
}

export default MainHero