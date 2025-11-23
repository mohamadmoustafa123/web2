import CallIcon from "@mui/icons-material/Call";
export default function Contact() {
  return (
    <>
      <div>
        <h2 style={{ marginTop: "100px", color: "gray" }}>
          For any technical issues,please call the following number:
          <div>
            <CallIcon style={{ marginRight: "10px", color: "red" }} />
            <a href="tel:+96171808931">71808931</a>
          </div>
        </h2>
      </div>
    </>
  );
}
