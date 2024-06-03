import author from './blog/author';
import post from './blog/post';
import tag from './blog/tag';
import blockContent from './helpers/blockContent';
import mainImage from './helpers/mainImage';
import seo from './helpers/seo';
import localeBlockContent from './locale/localeBlockContent';
import localeString from './locale/localeString';
import localeText from './locale/localeText';
import beer from './pages/beer';
import blog from './pages/blog';
import blogPost from './pages/blogPost';
import brewery from './pages/brewery';
import home from './pages/home';
import profile from './pages/profile';
import email from './email/template';

export const schemaTypes = [
    post,
    author,
    tag,
    home,
    beer,
    brewery,
    profile,
    blog,
    blogPost,
    seo,
    blockContent,
    localeString,
    localeText,
    localeBlockContent,
    mainImage,
    email,
];
