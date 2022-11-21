import './mailList.css'
function MailList(){
    return(
        <div className="mail">
        <h1 className="mail_title">Save time, save money!</h1>
        <span className="mail_desc">Sign up and we'll send the best deals to you</span>
        <div className="mail_Input_Container">
          <input type="text" placeholder="Your Email" />
          <button>Subscribe</button>
        </div>
      </div>
    )
}
export default MailList