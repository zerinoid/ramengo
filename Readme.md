https://ramengoo.netlify.app

# Intro
First of all, thank you for the oportunity. It was a real challenge to make this without any JS lib. I've truly learned a lot by going through it.

**Due to time and libraries restraints I was not able to implement everything properly as it took more time to figure some features out.**

Some features I just couldn't. The redirect to the order page worked flawlessly in my dev server but I couldn't reproduce it in netlifies production ambient, no matter what I tried. Of course this is due to wrong decision I took, Its hard to handle dynamic interaction between static html files JS redirection / routing functions.

Netlify just doesn't handle it out of the box and there is no time left for me to figure it out, as well as there was not enough time for me to refactor the app in a way that it would handle.

**So I hope you guys would consider running the app locally** with vite and at least have a look at it:

`git clone https://github.com/zerinoid/ramengo.git`\
`cd ramengo` \
`npm i`\
`npm run dev`


I couldn't reproduce every layout detail and the order page is quite different from it's desktop project also due to lack of time.

# Organization / Strategy

I tried at most to separate logic from different components. At the end it was quite difficult to maintain good practices, hope you understand.

Great points:
- Took some time to properly folder structure
- Made great effort to make components reusable (check the ingredients buttons generation process at ingredients.js)
- Avoided using global variable sand went for CustomEvents with **observable architecture** in mind
- Had to skip carousel implementation as it would be too time consuming

# Todo
- Error handling
- Implement carousel functionality

# Regrets
- Should have tried web components
- Or should have went for a less "html file oriented" approach as it would be more feasible for routing
# Sorry
For not properly finishing it
# Testing
If only I had more time :)
