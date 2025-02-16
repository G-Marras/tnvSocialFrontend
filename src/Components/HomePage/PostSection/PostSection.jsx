import './PostSection.css'
import { useEffect, useState } from "react"

function PostSection() {
    const [page, setPage] = useState(1)
    const [posts, setPosts] = useState([])
    const [loadingPosts, setLoadingPosts] = useState(false)
    const [timedPostCount, setTimedPostCount] = useState(null)
    const postCount = 25

    const newPostLoading = () => {
        console.log("Printing pages")
        if (loadingPosts || (timedPostCount !== null && timedPostCount >= postCount)) return
        setLoadingPosts(true)

        fetch(`http://localhost:8000/post/page/${page}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error : ${response.status}`)
                }
                return response.json()
            })
            .then(data => {
                setPosts(prevPosts => {
                    setTimedPostCount(data.length)
                    const uniquePosts = [...prevPosts]
                    data.forEach(newPost => {
                        if (!uniquePosts.find(post => post.id === newPost.id)) {
                            uniquePosts.push(newPost)
                        }
                    })
                    return uniquePosts
                })
                setPage(prevPage => prevPage + 1)
                setLoadingPosts(false)
            })
            .catch(error => {
                console.log("Error of the fetch:", error)
                setLoadingPosts(false)
            })
    }

    useEffect(() => {
        console.log("Initial loading posts")
        newPostLoading()
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            const bottom =
                window.innerHeight + document.documentElement.scrollTop >=
                document.documentElement.scrollHeight - 5
            if (bottom && !loadingPosts && timedPostCount !== null && timedPostCount >= postCount) {
                newPostLoading()
            }else{
                console.log("No more loading")
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [loadingPosts, timedPostCount])

    const AccordionAction = postId => {
        setPosts(prevPosts =>
            prevPosts.map(post =>
                post.id === postId
                    ? { ...post, accordionOpen: !post.accordionOpen }
                    : post
            )
        )
    }

    return (
        <div className='PostSection'>
            {posts.map(post => (
                <div key={post.id} className='SinglePostContainer'>
                    <div className='PostSectionHeader'>
                        {post.title} {post.owner.name} {post.owner.surname} {post.createdAt}
                    </div>
                    {post.image && (
                        <div className='PostSectionImage'>
                            <img src={post.image} alt={post.title} />
                        </div>
                    )}
                    <div className='PostSectionContent'>
                        {post.text}
                    </div>
                    <div className='Counters'>
                        <div className='Likes'>Likes: {post.likes.count}</div>
                        <div className='Comments'>Comments: {post.comments.count}</div>
                    </div>
                    <div className="CommentSection">
                        <button onClick={() => AccordionAction(post.id)} className="AccordionButtonToggle">
                            {post.accordionOpen ? 'Hide comments' : 'Show comments'}
                        </button>
                        {post.accordionOpen && post.comments.count > 0 && (
                            <div className={`CommentsList ${post.accordionOpen ? 'open' : ''}`}>
                                {post.comments.list.map(comment => (
                                    <div key={comment.id} className='SingleComment'>
                                        <div className='Comment'>{comment.text}</div>
                                        <div className='CommentingUser'>
                                            <div className='User'>
                                                Commented by: {comment.author.name} {comment.author.surname}
                                            </div>
                                            <div className='UserDate'>
                                                Commented at: {comment.createdAt}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        {post.accordionOpen && post.comments.count === 0 && (
                            <p>No comments to see</p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PostSection
