import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner'
import PropTypes from 'prop-types'


export default class News extends Component {
    static defaultProps ={
      country:'in',
      pageSize: 8,
      category:'sports',
    }
    static propTypes= {
      country:PropTypes.string,
      pageSize:PropTypes.number,
      category:PropTypes.string,
    }
    constructor(){
      super()
      console.log("run")
      this.state ={
          articles: [], 
          loading: false,
          page:1
      }
    }

    async updateNews(){

      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7d9eedca877b4b7a9c50d83cc0ccd865&page=${this.state.page}&pageSize=${this.props.pageSize}`
      
      this.setState({loading:true})
      let data = await fetch(url)
      let parsedData = await data.json()
      
      // console.log(parsedData)
      // console.log("osama")
      // console.log(this.state.page)
      // console.log("javaid")      
      this.setState({
        articles:parsedData.articles,
        totalResults: parsedData.totalResults,
        loading:false,
      })
    }

    async componentDidMount(){
      this.updateNews()
    }
  
      //pagination section
      handlerPrevious = async () => {
        console.log("previous");
        this.setState({
          page:this.state.page - 1,
        })
        this.updateNews()
      }

      handlerNext = async()=>{
        console.log('next')
        this.setState({
          page:this.state.page + 1,
        })
        this.updateNews()
    }

  render() {
    return (
        <div className="container my-5">
        <h2 className='bg-dark text-light p-2 text-center'>JusCric - Top Headlines</h2>
          {this.state.loading && <Spinner/>}
          {/* <Spinner></Spinner> */}
          <div className="row">
            {!this.state.loading && this.state.articles.map(element=>{
              return <div key={element.url} className="col-sm-4 col-md-4">
              <NewsItem title={element.title} description={element.description} author={element.author} date={element.publishedAt} source={element.source.name} imgUrl={element.urlToImage?element.urlToImage:"https://ichef.bbci.co.uk/news/1024/branded_news/1440E/production/_123585928_gettyimages-1239004297.jpg"} urlNews={element.url}></NewsItem>  
            </div>
            })}  
          </div>
          <div className='d-flex justify-content-between mt-5'>
            <button disabled={this.state.page<=1} type="button" className="btn btn-outline-dark" onClick={this.handlerPrevious}>&larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-outline-dark" onClick={this.handlerNext}>Next &rarr;</button>
          </div>
        </div>
    )
  }
}
