// TODO: Get posts info
// console.log(posts);

const list = document.querySelector(".cards");
const loader = document.querySelector(".spinner");
const form = document.querySelector(".search-form");
const toast = document.querySelector(".toast");

const markup = renderPosts(posts);

list.insertAdjacentHTML("beforeend", markup);

function renderPosts(posts) {
  return posts
    .map(({ id, title, body, tags, reactions, views, userId, coverImage }) => {
      return `<li class="card border-dark mb-3" data-userid="${userId}">
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <hr />
              <div class="card-meta mb-3">
                <div class="card-meta-tags">
                  <p class="m-0 text-black-50 fw-lighter">
                    <i class="bi bi-tag"></i>
                  </p>
                  <ul class="tags-list">
                    <li
                      class="border border-dark rounded-1 text-center text-black-50 fw-lighter"
                    >
                      <small>${tags[0]}</small>
                    </li>
                    <li
                      class="border border-dark rounded-1 text-center text-black-50 fw-lighter"
                    >
                      <small>${tags[1]}</small>
                    </li>
                    <li
                      class="border border-dark rounded-1 text-center text-black-50 fw-lighter"
                    >
                      <small>${tags[2]}</small>
                    </li>
                  </ul>
                </div>

                <ul class="card-meta-likes">
                  <li class="text-black-50 fw-lighter">
                    <i class="bi bi-hand-thumbs-up"></i> <small>${reactions.likes}</small>
                  </li>
                  <li class="text-black-50 fw-lighter">
                    <i class="bi bi-hand-thumbs-down"></i> <small>${reactions.dislikes}</small>
                  </li>
                </ul>

                <p class="card-meta-views m-0 text-black-50 fw-lighter">
                  <i class="bi bi-eye"></i> <small>${views}</small>
                </p>
              </div>
              <hr />
              <p class="card-text">
                ${body}
              </p>
            </div>
          </li>`;
    })
    .join("");
}
function handleFormSubmit(event) {
  event.preventDefault();

  const queue = event.target.elements.searchQuery.value.trim();
  const toastNotification = bootstrap.Toast.getOrCreateInstance(toast);

  if (queue.trim() === "") {
    toastNotification.show();
    return;
  }
  list.innerHTML = "";
  loader.classList.remove("visually-hidden");

  setTimeout(() => {
    const newMarkup = posts.filter(
      post => post.title.includes(queue) || post.body.includes(queue)
    );
    loader.classList.add("visually-hidden");
    list.insertAdjacentHTML("beforeend", renderPosts(newMarkup));
  }, 500);
}

form.addEventListener("submit", handleFormSubmit);
