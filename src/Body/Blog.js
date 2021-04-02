import React, { Component } from 'react'

class Blog extends Component{
    render(){
        return(
            <div class="blog-post">
	<div class="blog-hero"></div>
		<article>
			
			<div class="blog-content">
				<summary>
					<h3>My First Blog Post</h3>
					<div class="blog-date">23 Jan 2021</div>
				</summary>
				<p></p>
			</div>
			<div class="blog-img">
				<div class="blog-img-caption"><b>Pictured</b> Some Cool Skyline</div>
			</div>
			<div class="blog-content">
				<p></p>

				<p> </p>
			</div>	
	</article>
</div>
        )
    }
}
export default Blog;