// import { makeStyles } from "@material-ui/core/styles";

import { style } from "@mui/system";

// export default makeStyles(() => ({
//   appBar: {
//     borderRadius: 15,
//     margin: "30px 0",
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   heading: {
//     color: "rgba(0,183,255, 1)",
//   },
//   image: {
//     marginLeft: "15px",
//   },
// }));


  const BarApp = style("AppBar")({
  borderRadius: 15,
  margin: "30px 0",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
});
export default BarApp