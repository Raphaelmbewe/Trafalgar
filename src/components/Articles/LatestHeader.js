import React from "react";
import './articles.css';
import "bootstrap/dist/css/bootstrap.min.css";

export const LatestHeaderForArticles = () =>{
    return(
        <section className="container Our-Latest-articles">
            <h2 className="latest-articles-header">Check out our latest articles</h2>
            <div className="line-for-article-header mt-4"></div>
        </section>
    )
}