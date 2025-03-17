// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import './InfoBox.css';

// export default function InfoBox({ info }) {
//   const INI_URL =
//     "https://media.istockphoto.com/id/1328689113/photo/summer-blue-sky-and-white-cloud-white-background-beautiful-clear-cloudy-in-sunlight-calm.jpg?s=1024x1024&w=is&k=20&c=ov-jq-weG-mPfrZe_NG66LNjFXDga4HjqmTvMr3lPqc=";

//     const HOT_URL = "https://images.unsplash.com/photo-1581129724980-2ab2153c3d8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
//     const COLD_URL = "https://images.unsplash.com/photo-1674407866481-a39b2239f771?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
//     const RAIN_URL = "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

//   return (
//     <>
//       <div className="InfoBox">
//         <div className="Card">
//           <Card sx={{ maxWidth: 345 }}>
//             <CardMedia
//               sx={{ height: 140 }}
//               image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
//               title="green iguana"
//             />
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="div">
//                 {info.city}
//               </Typography>
//               <Typography
//                 variant="body2"
//                 color="text.secondary"
//                 component={"span"}
//               >
//                 <div className="details">
//                   <p>Temperature = {info.temp}&deg;C</p>
//                   <p>Humidity = {info.humidity}</p>
//                   <p>Min Temp = {info.tempMin}&deg;C</p>
//                   <p>Max Temp = {info.tempMax}&deg;C</p>
//                   <p>
//                     The Weather can be described as <i>{info.weather}</i> and feels
//                     like = {info.feelsLike}&deg;C
//                   </p>
//                 </div>
//               </Typography>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </>
//   );
// }



import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import UmbrellaIcon from "@mui/icons-material/Umbrella";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const HOT_URL = "https://images.unsplash.com/photo-1581129724980-2ab2153c3d8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const COLD_URL = "https://images.unsplash.com/photo-1674407866481-a39b2239f771?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const RAIN_URL = "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const getWeatherIcon = () => {
    if (info.humidity > 80) {
      return <UmbrellaIcon style={{ color: "#1E90FF" }} />;
    } else if (info.temp > 15) {
      return <WbSunnyIcon style={{ color: "#FFA500" }} />;
    } else {
      return <AcUnitIcon style={{ color: "#00BFFF" }} />;
    }
  };

  return (
    <>
      <div className="InfoBox">
        <div className="Card">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
              title="Weather image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent:"center" }}>
                {getWeatherIcon()}
                {info.city}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                component={"span"}
              >
                <div className="details">
                  <p>Temperature = {info.temp}&deg;C</p>
                  <p>Humidity = {info.humidity}</p>
                  <p>Min Temp = {info.tempMin}&deg;C</p>
                  <p>Max Temp = {info.tempMax}&deg;C</p>
                  <p>
                    The Weather can be described as <i>{info.weather}</i> and feels
                    like = {info.feelsLike}&deg;C
                  </p>
                </div>
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
