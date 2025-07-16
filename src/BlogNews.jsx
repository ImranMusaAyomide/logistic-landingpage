import React from "react";
import "./BlogNews.css";
import { Button, Avatar, Typography, Box, Card, CardMedia, CardContent } from "@mui/material";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const blogPosts = [
  {
    title: "Mastering Last Mile Delivery Strategies For Success In Your Business",
    author: "Chris",
    date: "May 10, 2022",
    comments: 2,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    featured: true,
  },
  {
    title: "Mastering Last Mile Delivery Strategies For Success In Your Business",
    author: "Kevin Doppers",
    date: "May 10, 2022",
    comments: 2,
    image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=800&q=80",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    featured: false,
  },
  {
    title: "Mastering Last Mile Delivery Strategies For Success In Your Business",
    author: "Kevin Doppers",
    date: "May 10, 2022",
    comments: 2,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    featured: false,
  },
];

export default function BlogNews() {
  return (
    <div className="blog-news-outer-bg">
      <Box className="blog-news-root">
        <Typography variant="subtitle2" align="center" color="secondary" className="blog-news-breadcrumb">
          Blog & News
        </Typography>
        <Typography variant="h4" align="center" className="blog-news-title">
          Latest News Directly <br />
          <span className="blog-news-highlight">From Our Blog</span>
        </Typography>
        <div className="blog-news-flex-grid">
          <div className="blog-news-flex-left">
            <Card className="blog-news-card featured">
              <CardMedia
                component="img"
                height="220"
                image={blogPosts[0].image}
                alt="Blog featured"
              />
              <CardContent>
                <Box className="blog-news-meta">
                  <Typography variant="caption" className="blog-news-date">
                    <CalendarTodayIcon fontSize="inherit" style={{ verticalAlign: 'middle', marginRight: 4 }} />
                    {blogPosts[0].date}
                  </Typography>
                  <Typography variant="caption" className="blog-news-comments">
                    <ChatBubbleOutlineIcon fontSize="inherit" style={{ verticalAlign: 'middle', marginRight: 4 }} />
                    {blogPosts[0].comments} Comments
                  </Typography>
                </Box>
                <Typography variant="h6" className="blog-news-post-title">
                  {blogPosts[0].title}
                </Typography>
                <Box className="blog-news-author">
                  <Avatar src={blogPosts[0].avatar} alt={blogPosts[0].author} sx={{ width: 28, height: 28, mr: 1 }} />
                  <Typography variant="body2" className="blog-news-author-name">
                    {blogPosts[0].author}
                  </Typography>
                  <Typography variant="caption" className="blog-news-date" sx={{ ml: 2 }}>
                    {blogPosts[0].date}
                  </Typography>
                  <Button variant="contained" color="warning" className="blog-news-readmore" size="small" sx={{ ml: 'auto' }}>
                    Read More
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </div>
          <div className="blog-news-flex-right">
            {blogPosts.slice(1).map((post, idx) => (
              <Card className="blog-news-card small" key={idx}>
                <Box sx={{ display: 'flex' }}>
                  <CardMedia
                    component="img"
                    image={post.image}
                    alt="Blog post"
                    sx={{ width: 120, height: 90, borderRadius: 2, m: 1 }}
                  />
                  <CardContent sx={{ flex: 1, p: 1 }}>
                    <Box className="blog-news-meta">
                      <Typography variant="caption" className="blog-news-date">
                        <CalendarTodayIcon fontSize="inherit" style={{ verticalAlign: 'middle', marginRight: 4 }} />
                        {post.date}
                      </Typography>
                      <Typography variant="caption" className="blog-news-comments">
                        <ChatBubbleOutlineIcon fontSize="inherit" style={{ verticalAlign: 'middle', marginRight: 4 }} />
                        {post.comments} Comments
                      </Typography>
                    </Box>
                    <Typography variant="subtitle1" className="blog-news-post-title-small">
                      {post.title}
                    </Typography>
                    <Box className="blog-news-author">
                      <Avatar src={post.avatar} alt={post.author} sx={{ width: 24, height: 24, mr: 1 }} />
                      <Typography variant="body2" className="blog-news-author-name">
                        {post.author}
                      </Typography>
                      <Typography variant="caption" className="blog-news-date" sx={{ ml: 2 }}>
                        {post.date}
                      </Typography>
                    </Box>
                  </CardContent>
                </Box>
              </Card>
            ))}
          </div>
        </div>
      </Box>
    </div>
  );
} 