import React from "react";
import Twitter from "../assets/twitter-alt.svg";
import GitHub from "../assets/github-alt.svg";
import config from "../lib/config";
import { TwitterFollowButton, TwitterShareButton } from "react-twitter-embed";

export function SocialList({}) {
  return (
    <div>
      <a
        title="Twitter Follow"
        href={`https://twitter.com/${config.twitter_account}`}
        target="_blank"
        rel="noopener"
      >
        <TwitterFollowButton screenName="iYash_Soni" />
      </a>
      <style jsx>{`
        a {
          display: inline-block;
        }
        a:not(:last-child) {
          margin-right: 2em;
        }
      `}</style>
    </div>
  );
}
