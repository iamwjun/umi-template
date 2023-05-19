export default {
  // 登录
  'POST /api/login':  (_req, res) => {
    setTimeout(() => res.status(200).json({ id: 2, name: "bar" }), 230);
  },
}