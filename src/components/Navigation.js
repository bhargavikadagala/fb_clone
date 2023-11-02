function Navigation(prop){
return(
<nav>
<div className="nav-left">
	<a href="Index.html">
		<img src={require("./images/logo2.png")} className="logo" />
	</a>
	<ul>
		<li><img src={require("./images/notification.png")} /></li>
		<li><img src={require("./images/inbox.png")} /></li>
		<li><img src={require("./images/video.png")} /></li>
	</ul>
</div>
<div className="nav-right">
	<div className="search-box">
		<img src={require("./images/search.png")} />
		<input type="text" placeholder="Search" />
	</div>
	<div className="nav-user-icon online" onclick="settingsMenuToggle()">
		<img src={require("./images/profile-pic.png")} />
	</div>
</div>
{/*--------------Settings Menu"---------------------*/}
<div className="settings-menu">
	<div id="dark-btn">
		<span />
	</div>
	<div className="settings-menu-inner">
		<div className="user-profile">
			<img src={require("./images/profile-pic.png")} />
			<div>
				<p>John Nicholson</p>
				<a href="profile.html">See your profile</a>
			</div>
		</div>
		<hr />
		<div className="user-profile">
			<img src={require("./images/feedback.png")} />
			<div>
				<p>Give Feedback</p>
				<a href="#">Help us to improve the new design</a>
			</div>
		</div>
		<hr />
		<div className="settings-links">
			<img src={require("./images/setting.png")} className="settings-icon" />
			<a href="#">Settings &amp; Privacy <img src={require("./images/arrow.png")} width="10px" /></a>
		</div>
		<div className="settings-links">
			<img src={require("./images/help.png")} className="settings-icon" />
			<a href="#">Help &amp; Support<img src={require("./images/arrow.png")} width="10px" /></a>
		</div>
		<div className="settings-links">
			<img src={require("./images/display.png")} className="settings-icon" />
			<a href="#">Display &amp; Accessibility <img src={require("./images/arrow.png")} width="10px" /></a>
		</div>
		<div className="settings-links">
			<img src={require("./images/logout.png")} className="settings-icon" />
			<a href="#">Logout <img src={require("./images/arrow.png")} width="10px" /></a>
		</div>
	</div>
</div>
</nav>
)
}