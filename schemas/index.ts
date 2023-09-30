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
import brewery from './pages/brewery';

export const schemaTypes = [
    post,
    author,
    tag,
    beer,
    brewery,
    seo,
    blockContent,
    localeString,
    localeText,
    localeBlockContent,
    mainImage,
];
