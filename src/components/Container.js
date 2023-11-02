function Container(prop){
	return(
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
			)
}
export default Container