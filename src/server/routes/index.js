const Router = require('koa-router');

const router = new Router();
let { todos } = require('../data');

function promisifyTimeout(fn, delay) {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      fn();
      resolve();
    }, delay);
  });
  return promise;
}

// render index page
router.get('/', async (ctx) => {
  await ctx.render('index');
});

router.get('/api/getTodos', (ctx) => {
  ctx.body = todos;
});

router.post('/api/toggleTodo', async (ctx) => {
  const { id } = ctx.request.body;
  todos = todos.map((item) => {
    if (item.id === id) {
      const cItem = item;
      cItem.completed = !cItem.completed;
      return cItem;
    }
    return item;
  });

  await promisifyTimeout(() => {
    ctx.body = {
      success: true,
    };
  }, 500);
});

router.post('/api/addTodo', async (ctx) => {
  const { title } = ctx.request.body;
  const lastId = todos[todos.length - 1].id;
  const newTodo = {
    title,
    id: lastId + 1,
    completed: false,
  };

  todos.push(newTodo);

  await promisifyTimeout(() => {
    ctx.body = newTodo;
  }, 1000);
});

router.post('/api/delTodo', async (ctx) => {
  const { id } = ctx.request.body;
  todos = todos.filter(item => item.id !== id);

  await promisifyTimeout(() => {
    ctx.body = {
      success: true,
    };
  }, 500);
});

router.post('/api/editTodo', async (ctx) => {
  const { id, title } = ctx.request.body;
  todos = todos.map((item) => {
    if (item.id === +id) {
      const sItem = item;
      sItem.title = title;
      return sItem;
    }
    return item;
  });
  const currentTodo = todos.find(item => item.id === +id);

  await promisifyTimeout(() => {
    console.log(currentTodo);
    ctx.body = currentTodo;
  }, 500);
});

module.exports = router;
