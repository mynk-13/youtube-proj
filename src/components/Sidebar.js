import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import homeIcon from "../icons/homeIcon.svg"; 
import shortsIcon from "../icons/shortsIcon.svg";
import subscriptionsIcon from "../icons/subscriptionsIcon.svg";
import redLiveIcon from "../icons/redLiveIcon.svg";
import libraryIcon from "../icons/libraryIcon.svg";
import historyIcon from "../icons/historyIcon.svg";
import yourVideosIcon from "../icons/yourVideosIcon.svg";
import watchLaterIcon from "../icons/watchLaterIcon.svg";
import likedVideosIcon from "../icons/likedVideosIcon.svg";
import showMoreIcon from "../icons/showMoreIcon.svg";
import trendingIcon from "../icons/trendingIcon.svg";
import shoppingIcon from "../icons/shoppingIcon.svg";
import musicIcon from "../icons/musicIcon.svg";
import moviesIcon from "../icons/moviesIcon.svg";
import liveIcon from "../icons/liveIcon.svg";
import gameIcon from "../icons/gameIcon.svg";
import newsIcon from "../icons/newsIcon.svg";
import sportsIcon from "../icons/sportsIcon.svg";
import learningIcon from "../icons/learningIcon.svg";
import fashionIcon from "../icons/fashionIcon.svg";
import ytPremiumIcon from "../icons/ytPremiumIcon.svg";
import ytStudioIcon from "../icons/ytStudioIcon.svg";
import ytMusicIcon from "../icons/ytMusicIcon.svg";
import ytKidsIcon from "../icons/ytKidsIcon.svg";
import settingsIcon from "../icons/settingsIcon.svg";
import reportHistoryIcon from "../icons/reportHistoryIcon.svg";
import helpIcon from "../icons/helpIcon.svg";
import sendFeedbackIcon from "../icons/sendFeedbackIcon.svg";


const Sidebar = () => {

 
    const isMenuOpen=useSelector((store)=> store.app.isMenuOpen);

    if(!isMenuOpen) return null;

  return (
    <div className="p-5 col-span-1 max-h-screen hover:overflow-y-scroll overflow-hidden overscroll-contain sticky top-[64px] z-90 bg-white scrollbar-style">
            <ul>
                <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
                    <Link to="/">
                    <img
                         className="inline-block align-bottom mr-3"
                         src={homeIcon}
                         alt="Home" />
                     Home    
                    </Link>
                </li>
                <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
                <Link to="/">
                <img
                        className="inline-block align-bottom mr-3"
                        src={shortsIcon}
                        alt="Shorts" />
                       {" "}
                      Shorts
                    </Link>
                </li>
                <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
                <Link to="/">
                <img
                        className="inline-block align-bottom mr-3"
                        src={subscriptionsIcon}
                        alt="Subscriptions" />
                       {" "}
                      Subscriptions
                    </Link>
                </li>
            </ul>

            <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-200" />
            <ul>
                <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
                <Link to="/">
                {" "}
                <img
                     className="inline-block align-bottom mr-3"
                     src={libraryIcon}
                     alt="Library" />{" "}
                    Library
                </Link>
                </li>
             <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
             <Link to="/">
            {" "}
            <img
              className="inline-block align-bottom mr-3"
              src={historyIcon}
              alt="History"
            />{" "}
            History
          </Link>
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <Link to="/">
            {" "}
            <img
              className="inline-block align-bottom mr-3"
              src={yourVideosIcon}
              alt="YourVideos"
            />{" "}
            Your Videos
          </Link>
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <Link to="/">
            {" "}
            <img
              className="inline-block align-bottom mr-3"
              src={watchLaterIcon}
              alt="WatchLater"
            />{" "}
            Watch Later
          </Link>
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <Link to="/">
            {" "}
            <img
              className="inline-block align-bottom mr-3"
              src={likedVideosIcon}
              alt="LikedVideos"
            />{" "}
            Liked Videos
          </Link>
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <Link to="/">
            {" "}
            <img
              className="inline-block align-bottom mr-3"
              src={showMoreIcon}
              alt="ShowMore"
            />{" "}
            Show More
          </Link>
        </li>
      </ul>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-200" />
      <h1 className="font-medium pt-5">Subscriptions</h1>
      <ul>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <Link to={"/"}>
            {" "}
            Scary Fun{" "}
            <img
              className="inline-block align-bottom mr-3"
              src={redLiveIcon}
              alt="ScaryFun"
            />{" "}
          </Link>
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <Link to={"/"}>
            {" "}
            Crime Tak{" "}
            <img
              className="inline-block align-bottom mr-3"
              src={redLiveIcon}
              alt="CrimeTak"
            />{" "}
          </Link>
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <Link to={"/"}>
            {" "}
            Show More...{" "}
            <img
              className="inline-block align-bottom mr-3"
              src={showMoreIcon}
              alt="ShowMore"
            />{" "}
          </Link>
        </li>
      </ul>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-200" />
      <h1 className="font-medium pt-5">Explore</h1>
      <ul>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <Link to={"/"}>
            {" "}
            <img
              className="inline-block align-bottom mr-3"
              src={trendingIcon}
              alt="Trending"
            />{" "}
            Trending
          </Link>
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <Link to={"/"}>
            {" "}
            <img
              className="inline-block align-bottom mr-3"
              src={shoppingIcon}
              alt="Shopping"
            />{" "}
            Shopping
          </Link>
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <Link to={"/"}>
            {" "}
            <img
              className="inline-block align-bottom mr-3"
              src={musicIcon}
              alt="Music"
            />{" "}
            Music
          </Link>
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <Link to={"/"}>
            {" "}
            <img
              className="inline-block align-bottom mr-3"
              src={moviesIcon}
              alt="Movies"
            />{" "}
            Movies
          </Link>
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <Link to={"/"}>
            {" "}
            <img
              className="inline-block align-bottom mr-3"
              src={liveIcon}
              alt="Live"
            />{" "}
            Live
          </Link>
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <Link to={"/"}>
            {" "}
            <img
              className="inline-block align-bottom mr-3"
              src={gameIcon}
              alt="Gaming"
            />{" "}
            Gaming
          </Link>
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <Link to={"/"}>
            {" "}
            <img
              className="inline-block align-bottom mr-3"
              src={newsIcon}
              alt="News"
            />{" "}
            News
          </Link>
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <Link to={"/"}>
            {" "}
            <img
              className="inline-block align-bottom mr-3"
              src={sportsIcon}
              alt="Sports"
            />{" "}
            Sports
          </Link>
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <Link to={"/"}>
            {" "}
            <img
              className="inline-block align-bottom mr-3"
              src={learningIcon}
              alt="Learning"
            />{" "}
            Learning
          </Link>
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <Link to={"/"}>
            {" "}
            <img
              className="inline-block align-bottom mr-3"
              src={fashionIcon}
              alt="FashionBeauty"
            />{" "}
            Fashion & Beauty
          </Link>
        </li>
      </ul>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-200" />
      <h1 className="font-medium pt-5">More From Youtube</h1>
      <ul>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <Link to={"/"}>
            {" "}
            <img
              className="inline-block align-bottom mr-3"
              src={ytPremiumIcon}
              alt="YoutubePremium"
            />{" "}
            Youtube Premium
          </Link>
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <Link to={"/"}>
            {" "}
            <img
              className="inline-block align-bottom mr-3"
              src={ytStudioIcon}
              alt="YoutubeStudio"
            />{" "}
            Youtube Studio
          </Link>
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <Link to={"/"}>
            {" "}
            <img
              className="inline-block align-bottom mr-3"
              src={ytMusicIcon}
              alt="YoutubeMusic"
            />{" "}
            Youtube Music
          </Link>
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <Link to={"/"}>
            {" "}
            <img
              className="inline-block align-bottom mr-3"
              src={ytKidsIcon}
              alt="YoutubeKids"
            />{" "}
            Youtube Kids
          </Link>
        </li>
      </ul>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-200" />
      <ul>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <Link to={"/"}>
            {" "}
            <img
              className="inline-block align-bottom mr-3"
              src={settingsIcon}
              alt="Settings"
            />{" "}
            Settings
          </Link>
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <Link to={"/"}>
            {" "}
            <img
              className="inline-block align-bottom mr-3"
              src={reportHistoryIcon}
              alt="ReportHistory"
            />{" "}
            Report History
          </Link>
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <Link to={"/"}>
            {" "}
            <img
              className="inline-block align-bottom mr-3"
              src={helpIcon}
              alt="Help"
            />{" "}
            Help
          </Link>
        </li>
        <li className="my-1 p-1 py-2 hover:bg-gray-100 cursor-pointer rounded-lg">
          <Link to={"/"}>
            {" "}
            <img
              className="inline-block align-bottom mr-3"
              src={sendFeedbackIcon}
              alt="Send Feedback"
            />{" "}
            Send Feedback
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar;