import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export default class NewsFeed extends Component {
  static defaultProps = {
    country: "in",
  };

  static propTypes = {
    country: PropTypes.string,
  };

  articles = [
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: "Olena Harmash, Tom Balmforth",
      title:
        "Russia strikes Ukrainian energy facilities in biggest attack in weeks - Reuters",
      description:
        "Russia carried out its biggest missile attack in weeks across Ukraine on Thursday, pounding energy facilities in what officials said appeared to be the first salvo in a new air campaign against the Ukrainian power grid.",
      url: "https://www.reuters.com/world/europe/blasts-heard-kyiv-other-parts-ukraine-2023-09-21/",
      urlToImage:
        "https://www.reuters.com/resizer/JzIEjXdZXWb4VGQ9W6gDoraB26w=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/RUUV5CROL5NYPB434DWAQ2XI2U.jpg",
      publishedAt: "2023-09-21T10:22:04Z",
      content:
        "KYIV, Sept 21 (Reuters) - Russia carried out its biggest missile attack in weeks across Ukraine on Thursday, pounding energy facilities in what officials said appeared to be the first salvo in a new … [+4212 chars]",
    },
  ];

  constructor(props) {
    console.log("in cons");
    super(props);
    this.state = {
      articles: this.articles,
      page: 1,
      loading: false,
    };
    document.title = this.props.category + " - FlashFeed";
  }

  // in function based component to replace ComponentDidMount()
  // useEffect(() => {
  //   this.props.setProgress(10)
  //   console.log("cdn");
  //   let url =
  //     `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=33227e6ded7043c7ba9647cb4d1f3982&page=1&pageSize=21`;
  //   this.setState({ loading: true });

  //   fetch(url)
  //     .then(
  //       (response) => {
  //         // console.log(response.json())
  //         return response.json();
  //       },
  //       (error) => {
  //         console.log("ERROR!");
  //       }

  //     )
  //     .then((data) => {
  //       console.log(data); // total result > data.articles but only sum result are getting in data.articles , which means only 1 pages rendering so get all pages result  so add next page
  //       console.log(data.articles);

  //       data.articles && this.setState({
  //         articles: data.articles,
  //         totalResults: data.totalResults,
  //         loading: false,

  //         // page:this.state.page+1
  //       });
  //       // this.setState({loading:false})
  //     });
  //     this.props.setProgress(100)

  // }, [])

  componentDidMount() {
    this.props.setProgress(10);
    console.log("cdn");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=33227e6ded7043c7ba9647cb4d1f3982&page=1&pageSize=21`;
    this.setState({ loading: true });

    fetch(url)
      .then(
        (response) => {
          // console.log(response.json())
          return response.json();
        },
        (error) => {
          console.log("ERROR!");
        }
      )
      .then((data) => {
        console.log(data); // total result > data.articles but only sum result are getting in data.articles , which means only 1 pages rendering so get all pages result  so add next page
        console.log(data.articles);

        data.articles &&
          this.setState({
            articles: data.articles,
            totalResults: data.totalResults,
            loading: false,

            // page:this.state.page+1
          });
        // this.setState({loading:false})
      });
    this.props.setProgress(100);
  }

  handlePrevious = async () => {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=33227e6ded7043c7ba9647cb4d1f3982&page=${
      this.state.page - 1
    }&pageSize=21`;
    this.setState({ loading: true });
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          articles: data.articles,
          page: this.state.page - 1,
          loading: false,
        });
      });
    this.props.setProgress(100);
  };

  handleNext = async () => {
    this.props.setProgress(10);
    console.log("next");
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=33227e6ded7043c7ba9647cb4d1f3982&page=${
      this.state.page + 1
    }&pageSize=21`;
    this.setState({ loading: true });
    this.state.articles.length &&
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.setState({
            page: this.state.page + 1,
            articles: data.articles,
            loading: false,
          });
        });
    this.props.setProgress(100);
  };

  render() {
    console.log("render");
    return (
      <>
        {console.log(this.state.page)}
        {this.state.loading && <Spinner />}
        {!this.state.loading && (
          <div className="container my-3">
            <h2 className="my-5 text-capitalize">
              FlashFeed - Top {this.props.category} HedLines     {/* use of props in class */}
            </h2>

            <div className="row my-3">
              {!this.state.loading &&
                this.state.articles.map((element) => {
                  return (
                    <div
                      className="container col-md-4 col-sm-6 "
                      key={element.url}
                    >
                      <NewsItem
                        title={
                          element.title
                            ? element.title.slice(0, 45)
                            : "News By FlashFedd"
                        }
                        desc={
                          element.description
                            ? element.description.slice(0, 90)
                            : "for continues to read news click on  read more "
                        }
                        imageurl={
                          element.urlToImage
                            ? element.urlToImage
                            : "data:image/png;base64,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"
                        }
                        newsurl={element.url}
                        time={element.publishedAt}
                        sourse={element.source.name}
                      />
                    </div>
                  );
                })}
            </div>
            <div className="container d-flex justify-content-between">
              <button
                disabled={this.state.page === 1 ? true : false}
                type="button"
                className="btn btn-secondary"
                onClick={this.handlePrevious}
              >
                &larr; Previous
              </button>
              <button
                disabled={
                  Math.ceil(this.state.totalResults / 20) === this.state.page
                    ? true
                    : false
                }
                type="button"
                className="btn btn-secondary"
                onClick={this.handleNext}
              >
                Next &rarr;
              </button>
            </div>
          </div>
        )}
      </>
    );
  }
}
