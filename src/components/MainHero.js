 /* eslint-disable */
import React, { Component } from 'react'
import { Link } from 'gatsby'
import LazyLoad from 'react-lazy-load';
import Button from '../components/Button'

class MainHero extends Component {

  componentDidMount() {
      let cvs, ctx;
      let waves = [];
      let waveHeight = 60;
      let colours = ["#393895", "#ac2e74", "#f78f1d", "#f6f388"];

      function init() {
        cvs = document.getElementById("canvas");
        ctx = cvs.getContext("2d");
        resizeCanvas(cvs)

        for (let i = 0; i < 4; i++) {
          var temp = new wave(colours[i], 1, 6)
        }

        setInterval(update, 17)
      }

      const update = (array) => {
        var fill = "rgb(0, 0, 0)";
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
          // console.log(temp);
        }
        // console.log(this.nodes);
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
          if (window.innerWidth > 1920) {
            canvas.width = window.innerWidth;
          }
          else {
            canvas.width = 1920;
          }

          canvas.height = waveHeight;
        }

      }
      
      init()
      
    window.addEventListener('load', function () {
      var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));
      
      console.log('Lazy vids', lazyVideos)

      if ("IntersectionObserver" in window) {
        var lazyVideoObserver = new IntersectionObserver(function (entries, observer) {
          entries.forEach(function (video) {
            if (video.isIntersecting) {
              for (var source in video.target.children) {
                var videoSource = video.target.children[source];
                if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                  videoSource.src = videoSource.dataset.src;
                }
              }

              video.target.load();
              video.target.classList.remove("lazy");
              lazyVideoObserver.unobserve(video.target);
            }
          });
        });

        lazyVideos.forEach(function (lazyVideo) {
          lazyVideoObserver.observe(lazyVideo);
        });
      }
    });
      
  }

  render() {
    return (
    <>
        <section className="section herov2">

          <div className="video-container">
            <video className="lazy" autoPlay playsInline loop muted id="video-bg" poster="https://res.cloudinary.com/devhound/image/upload/v1529955642/Spacious_qaqfxc.jpg">
                <source data-src="https://res.cloudinary.com/devhound/video/upload/v1529956010/Spacious_e1cnqg.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="container">
            
        <div className="columns">
  
          <div className="column has-text-left">
            <h1 className="hero-title">{this.props.title}</h1>
            <p>{this.props.subtitle}</p>

            <Button to="/projects" color="white" text="View Portfolio"/>
          </div>

          <div className="column" style={{maxHeight: '300px'}}>
            
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