// import React from 'react'
// import { Helmet } from "react-helmet"
// const Userhome = () => {
//     const html = ` <script>
//     setInterval(function () {
//         clock = document.querySelector(".display");
//         let time = new Date();
//         let sec = time.getSeconds();
//         let min = time.getMinutes();
//         let hr = time.getHours();
//         let day = "AM";
//         if (hr > 12) {
//             day = "PM";
//             hr = hr - 12;
//         }
//         if (hr == 0) {
//             hr = 12;
//         }
//         if (sec < 10) {
//             sec = "0" + sec;
//         }
//         if (min < 10) {
//             min = "0" + min;
//         }
//         if (hr < 10) {
//             hr = "0" + hr;
//         }
//         clock.textContent = hr + ":" + min + ":" + sec + " " + day;
//     });
//     var myDate = new Date();
//     var hrs = myDate.getHours();

//     var greet;

//     if (hrs < 12) greet = "Good Morning!";
//     else if (hrs >= 12 && hrs <= 17) greet = "Good Afternoon!";
//     else if (hrs >= 17 && hrs <= 24) greet = "Good Evening!";

//     document.getElementById("lblGreetings").innerHTML = "<b>" + greet;
//             </script > `;
//     return (
//         <>
//             <div className="hehe">
//                 <div className="clock">
//                     <div className="display"></div>
//                     <label id="lblGreetings"></label>
//                     <h2 id="quote">
//                         Your present circumstances dont determine where you go; they merely
//                         determine where you start.
//                     </h2>
//                 </div>
//             </div>

//             <div dangerouslySetInnerHTML={{ __html: html }} />;
//         </>

//     )

// }
// export default Userhome;