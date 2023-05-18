import React from "react";
import "./home.scss"
//import Stories from "../../components/stories/Stories";
import Posts from "../../components/posts/Posts";
import ForYouBanner from "../../components/forYouBanner/ForYouBanner";


const Home = () => {

    return (
        <div className="home">
            {/* <Stories /> */}
            <ForYouBanner />
            <Posts />
        </div>
    )

}

export default Home