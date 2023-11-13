'use client'
import dynamic from "next/dynamic";
import Script from "next/script";
import { useRef, useState } from "react";
import bo from './bo';
export default function Page() {
    const ref = useRef(null)
    const [text, setText] = useState('')
    const fn = async () => {
        const Microdraw = (await import('./Microdraw')).default
        console.log(Microdraw)
        const canvas = ref.current;
        paper.setup(canvas);
        paper.install(window);
        const { Path, Point, Group, view, PointText, Color, Rectangle } = paper;
        const bo = (await import('./bo')).default
        bo()


        var path = new Path();
        // Give the stroke a color
        path.strokeColor = new Color(0, 1, 1);
        var start = new Point(100, 100);
        // Move to start and draw a line from there
        path.moveTo(start);
        // Note the plus operator on Point objects.
        // PaperScript does that for us, and much more!
        path.lineTo([start.x + 100, start.y - 50]);

        var path2 = new Path.Circle({
            center: view.center,
            radius: 30,
            strokeColor: 'black'
        });

        var myCircle = new Path.Circle(new Point(100, 70), 50);
        myCircle.fillColor = new Color(0, 0, 1);

        var rectangle = new Rectangle(new Point(550, 150), new Point(450, 100));
        var path = new Path.Rectangle(rectangle);
        myCircle.fillColor = new Color('#e9e9ff');
        path.selected = true;

        var myPath = new Path();
        myPath.strokeColor = new Color('#19e9ff');

        // This function is called whenever the user
        // clicks the mouse in the view:
        function onMouseDown(event) {
        }

        view.onMouseDown = onMouseDown
        // view.onMouseDrag = (event) => {
        //     myCircle.position = event.point
        // }
        view.onMouseMove = (event) => {
            myCircle.position = event.point
        }
        function Ball(r, p, v) {
            this.radius = r;
            this.x=1;
            this.y=1;
            this.point = p;
            this.vector = v;
            this.maxVec = 15;
            this.numSegment = Math.floor(r / 3 + 2);
            this.boundOffset = [];
            this.boundOffsetBuff = [];
            this.sidePoints = [];
            this.path = new Path({
                fillColor: {
                    hue: Math.random() * 360,
                    saturation: 1,
                    brightness: 1
                },
                blendMode: 'lighter'
            });
            this.myCircle = new Path.Circle(new Point(this.point), this.radius);
            this.myCircle.fillColor = new Color(0, 0, 1);
        }
        Ball.prototype = {
            iterate: function () {
                this.checkBorders();
                this.myCircle.position.x += this.x
                this.myCircle.position.y += this.y
                // this.updateShape();
            },
            checkBorders: function () {
                var size = view.size;
                if (this.myCircle.position.x < 0)
                    this.x = 2
                if (this.myCircle.position.x > size.width)
                    this.x = -2;
                if (this.myCircle.position.y < 0)
                    this.y = 2;
                if (this.myCircle.position.y > size.height)
                    this.y = -2;
            },

            updateShape: function () {
                // var segments = this.path.segments;
                // for (var i = 0; i < this.numSegment; i++)
                //     segments[i].point = this.getSidePoint(i);

                this.path.smooth();
                for (var i = 0; i < this.numSegment; i++) {
                    if (this.boundOffset[i] < this.radius / 4)
                        this.boundOffset[i] = this.radius / 4;
                    var next = (i + 1) % this.numSegment;
                    var prev = (i > 0) ? i - 1 : this.numSegment - 1;
                    var offset = this.boundOffset[i];
                    offset += (this.radius - offset) / 15;
                    offset += ((this.boundOffset[next] + this.boundOffset[prev]) / 2 - offset) / 3;
                    this.boundOffsetBuff[i] = this.boundOffset[i] = offset;
                }
            },

            getSidePoint: function (index) {
                return this.point + this.sidePoints[index] * this.boundOffset[index];
            },

            updateBounds: function () {
                for (var i = 0; i < this.numSegment; i++)
                    this.boundOffset[i] = this.boundOffsetBuff[i];
            }
        }

        const balls = [];
        var numBalls = 18;
        for (var i = 0; i < numBalls; i++) {
            const ran = Point.random()
            var position = [ran.x * view._viewSize._width, ran.y * view._viewSize._height]
            var radius = Math.random() * 60 + 60;
            balls.push(new Ball(5, position, radius))
        }
        function onFrame() {
            for (const ball of balls) {
                ball.iterate();
            }
        }
        view.onFrame = onFrame
    }
    return (
        <>
            {text}
            <canvas ref={ref} id="myCanvas" className="w-full h-full"></canvas>
            <Script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.12.17/paper-full.min.js"
                onReady={fn}
            >
            </Script>
        </>
    )
}
