const connection = require('../db/connection');

exports.selectArticles = ({ sort_by, order }) => {
  return connection
    .select()
    .from('articles')
    .orderBy(sort_by || 'created_at', order || 'desc');
};