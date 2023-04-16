// router.get('/all/posts', async(req, res) => {
//     try {
//         const allpost = await posts.find();
//         res.status(200).jason(allpost)
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json('Server Error')
//     }
// })

// router.get('mypost/user', auth, async (req, res) => {
//     try{
//         const mypost = posts.find({name:}).populate('p')

//     } catch (error) {}
// })

// module.exports =router;