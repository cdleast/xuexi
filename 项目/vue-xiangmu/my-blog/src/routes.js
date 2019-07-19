// 引入文件
import ShowBlogs from './components/ShowBlogs'
import AddBlog from './components/AddBlog'
import SingBlog from './components/SingBlog'
// 编辑博客
import EditBlog from './components/EditBlog'

export default [
	{path:'/',component:ShowBlogs},
	{path:'/add',component:AddBlog},
	{path:'/blog/:id',component:SingBlog},
	// 编辑博客
	{path:'/edit/:id',component:EditBlog},
]


