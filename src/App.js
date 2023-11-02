import React from 'react';
import './App.css';
function  App() {
    return (
      <div>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>Social Media</title>
        <meta name="description" content />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="App.css" />
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
        <div className="container">
          {/*--------------Left Sidebar---------------------*/}
          <div className="left-sidebar">
            <div className="imp-links">
              <a href="#"><img src={require("./images/news.png")} />Latest News</a>
              <a href="#"><img src={require("./images/friends.png")} />Friendss</a>
              <a href="#"><img src={require("./images/group.png")} />Group</a>
              <a href="#"><img src={require("./images/marketplace.png")} />Marketplace</a>
              <a href="#"><img src={require("./images/watch.png")} />Watch</a>
              <a href="#">See More</a>
            </div>
            <div className="shortcut-link">
              <p>Your Shortcuts</p>
              <a href="#"><img src={require("./images/shortcut-1.png")} />Web Developers</a>
              <a href="#"><img src={require("./images/shortcut-2.png")} />Web Design course</a>
              <a href="#"><img src={require("./images/shortcut-3.png")} />Full Strack Development</a>
              <a href="#"><img src={require("./images/shortcut-4.png")} />Website Experts</a>
            </div>
          </div>
          {/*--------------Main Sidebar---------------------*/}
          <div className="main-content">
            <div className="story-gallery">
              <div className="story story1">
                <img src={require("./images/upload.png")} />
                <p>Post Story</p>
              </div>
              <div className="story story2">
                <img src={require("./images/member-1.png")} />
                <p>Alison</p>
              </div>
              <div className="story story3">
                <img src={require("./images/member-2.png")} />
                <p>Jackson</p>
              </div>
              <div className="story story4">
                <img src={require("./images/member-3.png")} />
                <p>Samona</p>
              </div>
              <div className="story story5">
                <img src={require("./images/member-4.png")} />
                <p>John Doe</p>
              </div>
            </div>
            <div className="write-post-container">
              <div className="user-profile">
                <img src={require("./images/profile-pic.png")} />
                <div>
                  <p>John Nicholson</p>
                  <small>Public <i className="fas fa-caret-down" /></small>
                </div>
              </div>
              <div className="post-input-container">
                <textarea rows={3} placeholder="What's on your mind, John?" defaultValue={""} />
                <div className="add-post-links">
                  <a href="#"><img src={require("./images/live-video.png")} />Live Video</a>
                  <a href="#"><img src={require("./images/photo.png")} />Photo/Video</a>
                  <a href="#"><img src={require("./images/feeling.png")} />Feling/Activity</a>
                </div>
              </div>
            </div>
            <div className="post-container">
              <dic className="post-row">
                <div className="user-profile">
                  <img src={require("./images/profile-pic.png")} />
                  <div>
                    <p>John Nicholson</p>
                    <span>June 24 2021, 13:40 pm</span>
                  </div>
                </div>
                <a href="#"><i className="fas fa-ellipsis-v" /></a>
              </dic>
              <p className="post-text">Subscribe <span>@Easy Tutorials</span> Youtube Channel to watch more videos on 
                website development and UI desings. <a href="#">#EasyTutorials</a> <a href="#">#YoutubeChannel</a></p>
              <img src={require("./images/feed-image-1.png")} className="post-img" />
              <div className="post-row">
                <div className="activity-icons">
                  <div><img src={require("./images/like-blue.png")} />120</div>
                  <div><img src={require("./images/comments.png")} />45</div>
                  <div><img src={require("./images/share.png")} />20</div>
                </div>
                <div className="post-porfile-icon">
                  <img src={require("./images/profile-pic.png")} /><i className="fas fa-caret-down" />
                </div>
              </div>
            </div>
            <div className="post-container">
              <dic className="post-row">
                <div className="user-profile">
                  <img src={require("./images/profile-pic.png")} />
                  <div>
                    <p>John Nicholson</p>
                    <span>June 24 2021, 13:40 pm</span>
                  </div>
                </div>
                <a href="#"><i className="fas fa-ellipsis-v" /></a>
              </dic>
              <p className="post-text">Like and share this video with friends, tag<span>@Easy Tutorials</span>facebook page on your post.
                Ask your dobuts in the comments. <a href="#">#EasyTutorials</a> <a href="#">#YoutubeChannel</a></p>
              <img src={require("./images/feed-image-2.png")} className="post-img" />
              <div className="post-row">
                <div className="activity-icons">
                  <div><img src={require("./images/like-blue.png")} />120</div>
                  <div><img src={require("./images/comments.png")} />45</div>
                  <div><img src={require("./images/share.png")} />20</div>
                </div>
                <div className="post-porfile-icon">
                  <img src={require("./images/profile-pic.png")} /><i className="fas fa-caret-down" />
                </div>
              </div>
            </div>
            <div className="post-container">
              <dic className="post-row">
                <div className="user-profile">
                  <img src={require("./images/profile-pic.png")} />
                  <div>
                    <p>John Nicholson</p>
                    <span>June 24 2021, 13:40 pm</span>
                  </div>
                </div>
                <a href="#"><i className="fas fa-ellipsis-v" /></a>
              </dic>
              <p className="post-text">Like and share this video with friends, tag<span>@Easy Tutorials</span>facebook page on your post.
                Ask your dobuts in the comments. <a href="#">#EasyTutorials</a> <a href="#">#YoutubeChannel</a></p>
              <img src={require("./images/feed-image-3.png")} className="post-img" />
              <div className="post-row">
                <div className="activity-icons">
                  <div><img src={require("./images/like-blue.png")} />120</div>
                  <div><img src={require("./images/comments.png")} />45</div>
                  <div><img src={require("./images/share.png")} />20</div>
                </div>
                <div className="post-porfile-icon">
                  <img src={require("./images/profile-pic.png")} /><i className="fas fa-caret-down" />
                </div>
              </div>
            </div>
            <div className="post-container">
              <dic className="post-row">
                <div className="user-profile">
                  <img src={require("./images/profile-pic.png")} />
                  <div>
                    <p>John Nicholson</p>
                    <span>June 24 2021, 13:40 pm</span>
                  </div>
                </div>
                <a href="#"><i className="fas fa-ellipsis-v" /></a>
              </dic>
              <p className="post-text">Like and share this video with friends, tag<span>@Easy Tutorials</span>facebook page on your post.
                Ask your dobuts in the comments. <a href="#">#EasyTutorials</a> <a href="#">#YoutubeChannel</a></p>
              <img src={require("./images/feed-image-4.png")} className="post-img" />
              <div className="post-row">
                <div className="activity-icons">
                  <div><img src={require("./images/like-blue.png")} />120</div>
                  <div><img src={require("./images/comments.png")} />45</div>
                  <div><img src={require("./images/share.png")} />20</div>
                </div>
                <div className="post-porfile-icon">
                  <img src={require("./images/profile-pic.png")} /><i className="fas fa-caret-down" />
                </div>
              </div>
            </div>
            <div className="post-container">
              <dic className="post-row">
                <div className="user-profile">
                  <img src={require("./images/profile-pic.png")} />
                  <div>
                    <p>John Nicholson</p>
                    <span>June 24 2021, 13:40 pm</span>
                  </div>
                </div>
                <a href="#"><i className="fas fa-ellipsis-v" /></a>
              </dic>
              <p className="post-text">Like and share this video with friends, tag<span>@Easy Tutorials</span>facebook page on your post.
                Ask your dobuts in the comments. <a href="#">#EasyTutorials</a> <a href="#">#YoutubeChannel</a></p>
              <img src={require("./images/feed-image-5.png")} className="post-img" />
              <div className="post-row">
                <div className="activity-icons">
                  <div><img src={require("./images/like-blue.png")} />120</div>
                  <div><img src={require("./images/comments.png")} />45</div>
                  <div><img src={require("./images/share.png")} />20</div>
                </div>
                <div className="post-porfile-icon">
                  <img src={require("./images/profile-pic.png")} /><i className="fas fa-caret-down" />
                </div>
              </div>
            </div>
            <button type="button" className="load-more-btn">Load More</button>
          </div>
          {/*--------------Right Sidebar---------------------*/}
          <div className="right-sidebar">
            <div className="sidebar-title">
              <h4>Events</h4>
              <a href="#">See All</a>
            </div>
            <div className="event">
              <div className="left-event">
                <h3>18</h3>
                <span>March</span>
              </div>
              <div className="right-event">
                <h4>Social Media</h4>
                <p><i className="fas fa-map-marker-alt" /> Willson Tech Park</p>
                <a href="#">More Info</a>
              </div>
            </div>
            <div className="event">
              <div className="left-event">
                <h3>22</h3>
                <span>June</span>
              </div>
              <div className="right-event">
                <h4>Mobile Marketing</h4>
                <p><i className="fas fa-map-marker-alt" /> Willson Tech Park</p>
                <a href="#">More Info</a>
              </div>
            </div>
            <div className="sidebar-title">
              <h4>Advertisement</h4>
              <a href="#">close</a>
            </div>
            <img src={require("./images/advertisement.png")} className="siderbar-ads" />
            <div className="sidebar-title">
              <h4>Conversation</h4>
              <a href="#">Hide Chat</a>
            </div>
            <div className="online-list">
              <div className="online">
                <img src={require("./images/member-1.png")} />
              </div>
              <p>Alison Mina</p>
            </div>
            <div className="online-list">
              <div className="online">
                <img src={require("./images/member-2.png")} />
              </div>
              <p>Jackson Aston</p>
            </div>
            <div className="online-list">
              <div className="online">
                <img src={require("./images/member-3.png")} />
              </div>
              <p>Samona Rose</p>
            </div>
            <div className="online-list">
              <div className="online">
                <img src={require("./images/member-4.png")} />
              </div>
              <p>Mike Pérez</p>
            </div>
          </div>
        </div>
        <div className="footer">
          <p>Copyright 2022 - Vkive Tutorials</p>
        </div>
      </div>
    );
  }
export default App;