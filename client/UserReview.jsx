import moment from 'moment';
import React from 'react';

const UserReview = (props) => {
  const { reviews } = props;
  const formattedDate = moment(reviews[0].date).format('D MMMM YYYY');
  const starsWidth = reviews[0].rating * 10;
  return (
    <div className="user-review-box">
      <div className="user-review-stars">
        <div style={{ width: starsWidth }}>&nbsp;</div>
      </div>
      <span>
        <strong>{ reviews[0].headline }</strong>
        <div className="user-review-byline">
          {formattedDate}
          &nbsp;| by&nbsp;
          <a>{reviews[0].username}</a>
          &nbsp;&ndash;&nbsp;
          <a>See all my reviews</a>
        </div>
        <div>
          <p>
            {reviews[0].body}
          </p>
        </div>
      </span>
      <hr />
      <div className="user-review-recs">
        {reviews[0].recs}
        &nbsp;out of&nbsp;
        {reviews[0].rectotal}
        &nbsp;people found this review helpful. Was this review helpful to you?&nbsp;
        <button>Yes</button>
        <button>No</button>
        &nbsp;
        <a>Report this</a>
      </div>
      <a>Review this title</a>
      &nbsp;|&nbsp;
      <a>
        See all&nbsp;
        {reviews.length}
        &nbsp;user reviews »
      </a>
    </div>

  );
};

export default UserReview;
