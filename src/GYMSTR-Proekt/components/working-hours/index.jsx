import React, {useState} from "react";
import "./style.scss"

const WorkingHours = () => {
 const [product,setProduct] = useState([
     {number:"6.00AM - 8.00AM", title:"POWER LIFTING", name:"JOHN DEO", id:1},
     {number:"8.00AM - 10.00AM", title:"BODY BUILDING", name:"JAMES TAYLOR", id:2},
     {number:"10.00AM - 12.00PM", title:"CARDIO PROGRAM", name:"JACK SPARROW", id:3},
     {number:"12.00PM - 2.00PM", title:"WEIGHT LOOSE", name:"ROBERT SMITH", id:4},
     {number:"2.00PM - 4.00PM", title:"FITNESS PROGRAM", name:"ADAM PHILLIPS", id:5},
     {number:"4.00PM - 6.00PM", title:"CROSfFIT CLASS", name:"JAMES ALIEN", id:6},
     {number:"6.00PM - 8.00PM", title:"MUSCLE BUILDING", name:"PETER JOHN", id:7},
     {number:"8.00PM - 10.00PM", title:"YOGA CLASS", name:"JESSY REO",id:8},
        {number:"6qw.00AM - 85.00AM", title:"POWER LIFTING", name:"JOHN DEO", id:9},
        {number:"8w.00AM - 106.00AM", title:"BODY BUILDING", name:"JAMES TAYLOR", id:10},
        {number:"10w.00AM - 127.00PM", title:"CARDIO PROGRAM", name:"JACK SPARROW", id:11},
        {number:"12w.00PM - 28.00PM", title:"WEIGHT LOOSE", name:"ROBERT SMITH", id:12},
        {number:"2w.00PM - 4e.00PM", title:"FITNESS PROGRAM", name:"ADAM PHILLIPS", id:13},
        {number:"4w.00PM - 6we.00PM", title:"CROSfFIT CLASS", name:"JAMES ALIEN", id:14},
        {number:"6w.00PM - 8we.00PM", title:"MUSCLE BUILDING", name:"PETER JOHN", id:15},
        {number:"8.00PM - 10e.00PM", title:"YOGA CLASS", name:"JESSY REO", id:16},
        {number:"6s.00AM - 8e.00AM", title:"POWER LIFTING", name:"JOHN DEO", id:17},
        {number:"8q.00AM - e.00AM", title:"BODY BUILDING", name:"JAMES TAYLOR", id:18},
        {number:"10qw.00AM - 12.00PM", title:"CARDIO PROGRAM", name:"JACK SPARROW", id:19},
        {number:"12.00PM - 2.00PM", title:"WEIGHT LOOSE", name:"ROBERT SMITH", id:20},
        {number:"2.00PM - 4.00PM", title:"FITNESS PROGRAM", name:"ADAM PHILLIPS", id:21},
        {number:"4.00PM - 6.00PM", title:"CROSfFIT CLASS", name:"JAMES ALIEN", id:22},
        {number:"6.00PM - 8.00PM", title:"MUSCLE BUILDING", name:"PETER JOHN", id:23},
        {number:"8.00PM - 10.00PM", title:"YOGA CLASS", name:"JESSY REO", id:24},

        {number:"6.00AM - 8.00AM", title:"POWER LIFTING", name:"JOHN DEO",id:25},
        {number:"8.00AM - 10.00AM", title:"BODY BUILDING", name:"JAMES TAYLOR",id:26},
        {number:"10.00AM - 12.00PM", title:"CARDIO PROGRAM", name:"JACK SPARROW",id:27},
        {number:"12.00PM - 2.00PM", title:"WEIGHT LOOSE", name:"ROBERT SMITH",id:28},
        {number:"2.00PM - 4.00PM", title:"FITNESS PROGRAM", name:"ADAM PHILLIPS",id:29},
        {number:"4.00PM - 6.00PM", title:"CROSfFIT CLASS", name:"JAMES ALIEN",id:30},
        {number:"6.00PM - 8.00PM", title:"MUSCLE BUILDING", name:"PETER JOHN",id:31},
        {number:"8.00PM - 10.00PM", title:"YOGA CLASS", name:"JESSY REO",id:32},

        {number:"614.00AM - 821.00AM", title:"POWER LIFTING", name:"JOHN DEO",id:33},
        {number:"835.00AM - 102.00AM", title:"BODY BUILDING", name:"JAMES TAYLOR",id:34},
       {number:"106.00AM - 122.00PM", title:"CARDIO PROGRAM", name:"JACK SPARROW",id:35},
        {number:"123.00PM - 22.00PM", title:"WEIGHT LOOSE", name:"ROBERT SMITH",id:36},
        {number:"21.00PM - 4we.e00PM", title:"FITNESS PROGRAM", name:"ADAM PHILLIPS",id:37},
        {number:"42.00PM - 6ew.00PM", title:"CROSfFIT CLASS", name:"JAMES ALIEN",id:38},
        {number:"63.00PM - 8we.00PM", title:"MUSCLE BUILDING", name:"PETER JOHN",id:39},
        {number:"844.00PM - 10ew.00PM", title:"YOGA CLASS", name:"JESSY REO",id:40},

        {number:"612.00AM - 84.00AM", title:"POWER LIFTING", name:"JOHN DEO",id:41},
        {number:"83.00AM - 104.00AM", title:"BODY BUILDING", name:"JAMES TAYLOR",id:42},
        {number:"105.00AM - 124.00PM", title:"CARDIO PROGRAM", name:"JACK SPARROW",id:43},
        {number:"126.00PM - 245.00PM", title:"WEIGHT LOOSE", name:"ROBERT SMITH",id:44},
        {number:"2r.00PM - 45.00PM", title:"FITNESS PROGRAM", name:"ADAM PHILLIPS",id:45},
        {number:"4r.00PM - 65.00PM", title:"CROSfFIT CLASS", name:"JAMES ALIEN",id:46},
        {number:"6f.00PM - 87.00PM", title:"MUSCLE BUILDING", name:"PETER JOHN",id:47},
        {number:"8f.00PM - 18.00PM", title:"YOGA CLASS", name:"JESSY REO",id:48},

        {number:"62.00AM - 81.00AM", title:"POWER LIFTING", name:"JOHN DEO",id:49},
        {number:"83.00AM - 102.00AM", title:"BODY BUILDING", name:"JAMES TAYLOR",id:50},
        {number:"10s.00AM - 123.00PM", title:"CARDIO PROGRAM", name:"JACK SPARROW",id:51},
        {number:"125.00PM - 24.00PM", title:"WEIGHT LOOSE", name:"ROBERT SMITH",id:52},
        {number:"23.00PM - 45.00PM", title:"FITNESS PROGRAM", name:"ADAM PHILLIPS",id:53},
        {number:"46.00PM - 66.00PM", title:"CROSfFIT CLASS", name:"JAMES ALIEN",id:54},
        {number:"68.00PM - 87.00PM", title:"MUSCLE BUILDING", name:"PETER JOHN",id:55},
        {number:"80.00PM - 108.00PM", title:"YOGA CLASS", name:"JESSY REO",id:56},

])

     return <section className="working-hours G-container">
             <div className="working-container">

                 <div className="working-title">
                      <h3>CLASS SCHEDULE</h3>
                     <h1>WORKING HOURS</h1>
                 </div>

                  <div className="working-menu">
                     <ul>
                         <li>MONDAY</li>
                         <li>TUESDAY</li>
                         <li>WEDNESDAY</li>
                         <li>THURSDAY</li>
                         <li>FRIDAY</li>
                         <li>SATURDAY</li>
                         <li>SUNDAY</li>
                     </ul>
                  </div>

                 <div className="working-content">
                       id:1
                 </div>
             </div>
     </section>
}
export default WorkingHours