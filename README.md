# Message site with React

### Summary

A message site created with React that displays short Twitter like messages from users. The site is integrated with a custom made Technigo API.

### Implementation details

It was fun a project to work on and I got the chance to try scoped CSS (with SCSS) for the first time. It worked out really well.

When liking a message I decided to update the state with the message that comes in return when sending the request. By doing this I can display the most current number of likes for a particular message at the same time.

I also implemented a spinner (easy to see when using simulated slow 3G in devtools) and some logic to go with it, since the like request/response cycle takes some time to complete (at least on slow networks).

A progress bar at the very top of the page has also been implemented.

### Technologies used

- HTML
- CSS
- Javascript
- React

### APIs used

- Custom made Technigo API

### Where can you see it in action?

URL to live site: https://confident-engelbart-e0a558.netlify.com/
