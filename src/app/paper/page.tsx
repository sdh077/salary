'use client'
import dynamic from "next/dynamic";
import Script from "next/script";
import { useRef, useState } from "react";
export default function Page() {
    const ref = useRef(null)
    const [text, setText] = useState('')
    const fn = async () => {
        const Microdraw = (await import('./Microdraw')).default
        console.log(Microdraw)
        const canvas = ref.current;
        paper.setup(canvas);
        const Path = paper.Path
        const Point = paper.Point
        const Group = paper.Group
        const view = paper.view
        const PointText = paper.PointText
        const Color = paper.Color
        const Rectangle = paper.Rectangle



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
            // Add a segment to the path at the position of the mouse:
            myPath.add(event.point);

            let point = event.point
            let hitResult = paper.project.hitTest(point, hitOptions);
            console.log(hitResult)
        }

        // paper.view.onMouseDown = onMouseDown
        view.onMouseDrag = (event) => {
            console.log('1')
            myPath.add(event.point);
        }
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
