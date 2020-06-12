import Enum from "./Enum";

export class ColumnEnum extends Enum {

  dbField: string;


  constructor(name: string, dbField: string) {
    super(name);
    this.dbField = dbField;
  }
}

const ColumnType = {
  // Bibliography data
  title: new ColumnEnum("Title", "submission.bibliography.TITLE"),
  author: new ColumnEnum("Author", "submission.bibliography.AUTHOR"),
  journal: new ColumnEnum("Journal", "submission.bibliography.JOURNAL"),
  book: new ColumnEnum("Book", "submission.bibliography.BOOK"),
  proceeding: new ColumnEnum("Proceedings", "submission.bibliography.PROCEEDINGS"),
  website: new ColumnEnum("Website", "submission.bibliography.WEBSITE"),
  publicationDate: new ColumnEnum("Publication date", "submission.bibliography.DATE"),
  publicationType: new ColumnEnum("Publication type", "submission.bibliography.type"),
  doi: new ColumnEnum("DOI", "submission.bibliography.DOI"),
  url: new ColumnEnum("URL", "submission.bibliography.URL"),

  // Article data
  question: new ColumnEnum("Question", "question"),
  metric: new ColumnEnum("Metric", "metric"),
  researchMethodType: new ColumnEnum("Research method", "researchMethodTypd"),
  methodType: new ColumnEnum("SE Method", "methodType"),
  methodologyType: new ColumnEnum("Methodology", "methodologyType"),
  integrity: new ColumnEnum("Integrity", "integrity"),
  result: new ColumnEnum("Result", "result"),
};
export default ColumnType;

