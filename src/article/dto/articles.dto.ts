import { ArticleEntity } from '../article.entity';

export class ArticlesDto {
  articles: ArticleEntity[];
  articlesCount: number;
}
