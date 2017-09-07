$(document).ready(function() {
  $('.user-reviews').on('click', '.trash-can', function() {
    const reviewId = $(this).closest('.review-card').attr('id')

    if (confirm('Are you sure you want to delete this review?')) {
      deleteReview(reviewId)
    }
  })
})

function deleteReview(reviewId) {
  $.ajax({
    url: `http://localhost:3000/reviews/${reviewId}`,
    method: 'delete'
  })
  .done((response) => {
    removePost(reviewId)
  })
  .fail(error => alert('Whoops! Something went wrong.'))
}

function removePost(id) {
  $(`#${id}`).slideUp('slow', function() {
    $(this).remove()
  })
}
