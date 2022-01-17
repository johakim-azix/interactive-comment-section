// import("CommentQueue")
class CommentQueue {
    static commentViewHolder = "<div id=\"comment-item-id\" class=\"comment-item\">\n" +
        "                           <div class=\"comment-bloc\">\n" +
        "                               <div class=\"comment\">\n" +
        "                                   <div class=\"likes display-sm\" >\n" +
        "                                      <div>" +
        "                                           <i onclick='increaseNote(this)' disabled class=\"fas fa-plus \"></i>\n" +
        "                                           <span>12</span>\n" +
        "                                           <i onclick='decreaseNote(this)' class=\"fas fa-minus\"></i>\n" +
        "                                      </div>" +
        "                                   </div>\n" +
        "                                   <div class=\"content\">\n" +

        "                                       <div>\n" +
        "                                           <div class=\"avatar xs\">\n" +
        "                                               <img  class=\"xs\" src=\"images/avatars/image-amyrobson.png\" alt=\"\">\n" +
        "                                           </div>\n" +
        "                                           <div class=\"header\">\n" +
        "                                               <h4>User name </h4>\n" +
        "                                               <span>you</span>\n" +
        "                                               <span>2weeks ago</span>\n" +
        "                                           </div>\n" +
        "                                           <div class='display-sm'>" +
        "                                               <button onclick='deleteComment(this)' name=\"comment-btn-delete\" class=\"btn delete\">" +
        "                                                   <label for=''>" +
        "                                                       <i class=\"fas fa-trash-alt\"></i>delete\n" +
        "                                                   </label>" +
        "                                               </button>\n" +
        "                                               <button onclick='replyToComment(this)' name=\"comment-btn-reply\" class=\"btn secondary\" >" +
        "                                                   <i class=\"fas fa-reply\"></i>Reply\n" +
        "                                               </button>\n" +
        "                                               <button onclick='editComment(this)' name=\"comment-btn-edit\" class=\"btn secondary\" >" +
        "                                                   <i class=\"fas fa-pencil-alt\"></i>Edit\n" +
        "                                               </button>" +
        "                                           </div>\n" +
        "                                       </div>\n" +

        "                                       <p class=\"text\" onfocusout='storeEditedComment(this)' contenteditable='false'>\n" +
        "                                       </p>\n" +


        "                                   <div class='display-xs'>\n" +

        "                                           <div class=\"likes \" style='display: flex; justify-content: space-between; width: fit-content'>\n" +
        "                                               <i onclick='increaseNote(this)' class=\"fas fa-plus \"></i>\n" +
        "                                               <span>12</span>\n" +
        "                                               <i onclick='decreaseNote(this)' class=\"fas fa-minus\"></i>\n" +
        "                                           </div>\n" +

        "                                       <div style='display: flex'>" +
        "                                           <button onclick='deleteComment(this)' name=\"comment-btn-delete\" class=\"btn delete\">" +
        "                                               <label for=''>" +
        "                                                   <i class=\"fas fa-trash-alt\"></i>delete\n" +
        "                                               </label>" +
        "                                           </button>\n" +
        "                                           <button onclick='replyToComment(this)' name=\"comment-btn-reply\" class=\"btn secondary\" >" +
        "                                               <i class=\"fas fa-reply\"></i>Reply\n" +
        "                                           </button>\n" +
        "                                           <button onclick='editComment(this)' name=\"comment-btn-edit\" class=\"btn secondary\" >" +
        "                                               <i class=\"fas fa-pencil-alt\"></i>Edit\n" +
        "                                           </button>" +
        "                                       </div>\n" +
        "                                     </div>\n" +


        "                                   </div>\n" +
        "                               </div>\n" +
        "                               <input name=\"reply-section-toggle\" type=\"checkbox\">\n" +
        "                               <div style='' class=\"new-reply\">\n" +


        "                                   <div style='display: flex; width: 100%; justify-content: space-between; margin-right: auto; margin-left: 7px'>" +
        "                                       <div class=\"avatar display-sm \">\n" +
        "                                           <img class=\"avatar\" src=\"images/avatars/image-juliusomo.webp\" alt=\"\">\n" +
        "                                       </div>\n" +
        "                                       <div onfocusin=\"textAriaFocusIn(this)\" onkeyup=\"enableBtn(this)\" onfocusout=\"textAriaFocusOut(this)\" class=\"comment-area\" contenteditable=\"true\">\n" +
        "                                           Enter your reply here ...\n" +
        "                                       </div>\n" +
        "                                       <div class='display-sm bloc'>\n" +
        "                                           <button onclick='sendReply(this)' name='reply-btn-send' class=\"btn btn-primary\" style=\"display: block; \"><i style=\"margin: 0!important\" class=\"fab fa-telegram-plane\"></i></button>\n" +
        // "                                        <button onclick='deleteReply(this)' name='reply-btn-delete' class=\"btn secondary\" style=\"display: block; margin-top: 5px; border: solid var(--neutral-light-gray) 1px; \"> <i style=\"margin: 0!important\" class=\"fas fa-trash\"></i></button>\n" +
        "                                           <button onclick='closeReplyEditer(this)' name='reply-btn-close' class=\"btn delete\" style=\"padding: 10px!important; margin-top: 5px; border: solid var(--primary-soft-red) 1px; \"> <i style=\"margin: 0!important\" class=\"fas fa-times\"></i></button>\n" +
        "                                       </div>\n" +
        "                                   </div>" +
        "                                   <div class=\"display-xs\"\n" +
        "                                            style=\"margin-top: 10px; justify-content: space-between; margin-right: auto; margin-left: 7px; width: 100%;\">" +
        "                                       <div class=\"avatar\">\n" +
        "                                           <img class=\"avatar\" src=\"images/avatars/image-juliusomo.webp\" alt=\"\">\n" +
        "                                       </div>\n" +
        "                                   <div>\n" +
        "                                   <button onclick=\"sendReply(this)\" disabled class=\"btn btn-primary\" style=\"display: block; \"><i\n" +
        "                                       style=\"margin: 0!important\" class=\"fab fa-telegram-plane\"></i></button>\n" +
        "                                   </div>" +
        "                               </div>" +
        "                               </div>\n" +
        "                           </div>\n" +


        "                           <div class=\"replies\">\n" +
        "                               <div class=\"queue\">" +
        "                               </div>\n" +
        "                           </div>\n" +
        "                       </div>"


    static replyViewHolder = "<div id='reply-item-id' class=\"comment-bloc\">\n" +
        "                        <div class=\"comment\">\n" +
        "                            <div class=\"likes display-sm\">\n" +
        "                                      <div>" +
        "                                           <i onclick='increaseNote(this)' class=\"fas fa-plus \"></i>\n" +
        "                                           <span>12</span>\n" +
        "                                           <i onclick='decreaseNote(this)' class=\"fas fa-minus\"></i>\n" +
        "                                      </div>" +
        "                            </div>\n" +
        "                            <div class=\"content\">\n" +
        "                                <div>\n" +
        "                                    <div class=\"avatar xs\">\n" +
        "                                        <img class=\"xs\" src=\"images/avatars/image-amyrobson.png\" alt=\"\">\n" +
        "                                    </div>\n" +
        "                                    <div class=\"header\">\n" +
        "                                        <h4>User name</h4>\n" +
        "                                        <span>you</span>\n" +
        "                                        <span>2weeks ago</span>\n" +
        "                                    </div>\n" +


        "                                     <div class='display-sm'>" +
        "                                       <button onclick='deleteComment(this)' name=\"comment-btn-delete\" class=\"btn delete\" >" +
        "                                               <label for=''>" +
        "                                                   <i class=\"fas fa-trash-alt\"></i>delete\n" +
        "                                               </label>" +
        "                                       </button>\n" +
        "                                       <button onclick='replyToComment(this)' name=\"comment-btn-reply\" class=\"btn secondary\">" +
        "                                           <i class=\"fas fa-reply\"></i>Reply\n" +
        "                                       </button>\n" +
        "                                       <button onclick='editComment(this)' name=\"comment-btn-edit\" class=\"btn secondary\">" +
        "                                           <i class=\"fas fa-pencil-alt\"></i>Edit\n" +
        "                                       </button>" +
        "                                   </div>\n" +


        "                                </div>\n" +
        "                                <p class=\"text\" onfocusout='storeEditedComment(this)' contenteditable='false'>\n" +
        "                                </p>\n" +

        "                                   <div class='display-xs'>\n" +

        "                                           <div class=\"likes\" style='display: flex; justify-content: space-between; width: fit-content'>\n" +
        "                                               <i onclick='increaseNote(this)' class=\"fas fa-plus \"></i>\n" +
        "                                               <span>12</span>\n" +
        "                                               <i onclick='decreaseNote(this)' class=\"fas fa-minus\"></i>\n" +
        "                                           </div>\n" +

        "                                       <div style='display: flex'>" +
        "                                           <button onclick='deleteComment(this)' name=\"comment-btn-delete\" class=\"btn delete\">" +
        "                                               <label for=''>" +
        "                                                   <i class=\"fas fa-trash-alt\"></i>delete\n" +
        "                                               </label>" +
        "                                           </button>\n" +
        "                                           <button onclick='replyToComment(this)' name=\"comment-btn-reply\" class=\"btn secondary\" >" +
        "                                               <i class=\"fas fa-reply\"></i>Reply\n" +
        "                                           </button>\n" +
        "                                           <button onclick='editComment(this)' name=\"comment-btn-edit\" class=\"btn secondary\" >" +
        "                                               <i class=\"fas fa-pencil-alt\"></i>Edit\n" +
        "                                           </button>" +
        "                                       </div>\n" +
        "                                     </div>\n" +


        "                            </div>\n" +
        "                        </div>\n" +
        "                        <input name=\"reply-section-toggle\" type=\"checkbox\">\n" +
        "                        <div class=\"new-reply\">\n" +
        "                                   <div style='display: flex; width: 100%; justify-content: space-between; margin-right: auto; margin-left: 7px'>" +
        "                                       <div class=\"avatar display-sm \">\n" +
        "                                           <img class=\"avatar\" src=\"images/avatars/image-juliusomo.webp\" alt=\"\">\n" +
        "                                       </div>\n" +
        "                                       <div onfocusin=\"textAriaFocusIn(this)\" onkeyup=\"enableBtn(this)\" onfocusout=\"textAriaFocusOut(this)\" class=\"comment-area\" contenteditable=\"true\">\n" +
        "                                           Enter your reply here ...\n" +
        "                                       </div>\n" +
        "                                       <div class='display-sm bloc'>\n" +
        "                                           <button onclick='sendReply(this)' name='reply-btn-send' class=\"btn btn-primary\" style=\"display: block; \"><i style=\"margin: 0!important\" class=\"fab fa-telegram-plane\"></i></button>\n" +
        // "                                        <button onclick='deleteReply(this)' name='reply-btn-delete' class=\"btn secondary\" style=\"display: block; margin-top: 5px; border: solid var(--neutral-light-gray) 1px; \"> <i style=\"margin: 0!important\" class=\"fas fa-trash\"></i></button>\n" +
        "                                           <button onclick='closeReplyEditer(this)' name='reply-btn-close' class=\"btn delete\" style=\"padding: 10px!important; margin-top: 5px; border: solid var(--primary-soft-red) 1px; \"> <i style=\"margin: 0!important\" class=\"fas fa-times\"></i></button>\n" +
        "                                       </div>\n" +
        "                                   </div>" +

        "                                   <div class=\"display-xs\"\n" +
        "                                            style=\"margin-top: 10px; justify-content: space-between; margin-right: auto; margin-left: 7px; width: 100%;\">" +
        "                                       <div class=\"avatar\">\n" +
        "                                           <img class=\"avatar\" src=\"images/avatars/image-juliusomo.webp\" alt=\"\">\n" +
        "                                       </div>\n" +
        "                                   <div>\n" +
        "                                   <button onclick=\"sendReply(this)\" disabled class=\"btn btn-primary\" style=\"display: block; \"><i\n" +
        "                                       style=\"margin: 0!important\" class=\"fab fa-telegram-plane\"></i></button>\n" +
        "                                   </div>" +
        "                               </div>" +


        "                        </div>\n" +
        "                    </div>"


    constructor(currentUser, layout, commentArray) {
        this.layout = layout
        this.commentArray = commentArray
        this.currentUser = currentUser
        this.layout.innerHTML = ""
        this.orderCommentByVotes()
        this.renderComments(this.layout)
    }

    setComments(comments) {
        this.commentArray = comments
    }

    getComments() {
        return this.commentArray
    }

    increaseNote(commentIndex, replyIndex) {
        try {
            let commentId = this.commentArray[commentIndex].id
            this.findCommentItem(commentIndex, replyIndex).score += 1
            this.orderCommentByVotes()
            this.layout.innerHTML = ""
            this.renderComments(this.layout)
            this.commentArray.forEach((comment, index) => {
                if (comment.id !== commentId) return
                document.getElementById("comment-item-"+index).scrollIntoView({
                    behavior:"smooth",
                    block:"start",
                })
            })
            return true
        } catch (exeption) {
            return false
        }
    }

    orderCommentByVotes(){
        this.commentArray.sort((commentB, commentA) =>{
            return (commentA.score - commentB.score)
        })
    }

    decreaseNote(commentIndex, replyIndex) {
        try {
            let newScore = this.findCommentItem(commentIndex, replyIndex).score - 1
            if (newScore < 0) return false
            let commentId = this.commentArray[commentIndex].id
            this.findCommentItem(commentIndex, replyIndex).score = newScore
            this.orderCommentByVotes()
            this.layout.innerHTML = ""
            this.renderComments(this.layout)
            this.commentArray.forEach((comment, index) => {
                if (comment.id !== commentId) return
                if (commentIndex === index) return
                document.getElementById("comment-item-"+index).scrollIntoView({
                    behavior:"smooth",
                    block:"start",
                })
            })
            return true
        } catch (exception) {
            return false
        }
    }

    findCommentItem(commentIndex, replyIndex) {//find comment in the given comments array
        if (replyIndex === null) return this.commentArray[commentIndex] //means we are looking for root comment
        return this.commentArray[commentIndex].replies[replyIndex] //means we're looking for reply
    }

    findCommentOwner(commentIndex, replyIndex) {
        return this.findCommentItem(commentIndex, replyIndex).user
    }

    addComment(comment) {
        this.commentArray.push(comment)
        this.layout.appendChild(this.bindCommentViewHolder(comment, (this.commentArray.length - 1), CommentQueue.commentViewHolder))
        setTimeout(()=>{
            document.getElementById("comment-item-"+(this.commentArray.length - 1)).scrollIntoView({
                behavior:"smooth",
                block:"start",
            })
        },50)
    }

    addReply(comment, rootCommentIndex) {
        this.commentArray[rootCommentIndex].replies.push(comment)
        let repliesQueueLayout = document.getElementById("comment-item-" + rootCommentIndex).getElementsByClassName("queue")[0]
        repliesQueueLayout.appendChild(this.bindReplyViewHolder(comment, (this.commentArray[rootCommentIndex].replies.length - 1), CommentQueue.replyViewHolder))
        setTimeout(()=>{
            document.getElementById("comment-item-"+rootCommentIndex).scrollIntoView({
                behavior:"smooth",
                block:"end"
            })
        },50)
    }

    removeComment(commentIndex, replyIndex) {
        if (replyIndex !== null) { //means i'm trying to delete a reply to a comment
            this.commentArray[commentIndex].replies.splice(replyIndex, 1)
            let replyItem = document.getElementById("reply-item-" + replyIndex)
            let repliesQueue = replyItem.parentElement
            repliesQueue.removeChild(replyItem)
        } else { //i'm trying to delete a root comment
            this.commentArray.splice(commentIndex, 1)
            let commentItem = document.getElementById("comment-item-" + commentIndex)
            let commentsQueue = commentItem.parentElement
            commentsQueue.removeChild(commentItem)
        }
    }

    editComment(commentIndex, replyIndex, textContent) {
        if (replyIndex === null) { //i'm editing a root comment comment
            this.commentArray[commentIndex].content = textContent
        } else { //im' editing a reply
            this.commentArray[commentIndex].replies[replyIndex].content = textContent
        }
        //no need to refresh the view since it already contains modifications
    }


    renderComments(layout) {
        this.commentArray.forEach((comment, index) => {
            layout.appendChild(this.bindCommentViewHolder(comment, index, CommentQueue.commentViewHolder))
        })
    }

    bindCommentViewHolder(comment, index, strViewHolder) {
        let parser = new DOMParser()
        let viewHolder = parser.parseFromString(strViewHolder, "text/html").getElementById("comment-item-id")
        viewHolder.setAttribute("id", "comment-item-" + index)

        let ownerAvatar = (viewHolder.getElementsByClassName("content")[0]).getElementsByClassName("avatar")[0].getElementsByTagName("img")[0]
        let currentUserAvatar = (viewHolder.getElementsByClassName("new-reply")[0]).getElementsByClassName("avatar")[0]
        let userNameLabel = (viewHolder.getElementsByClassName("header")[0]).getElementsByTagName("h4")[0]
        let ownershipLabel = (viewHolder.getElementsByClassName("header")[0]).getElementsByTagName("span")[0]
        let dateLabel = (viewHolder.getElementsByClassName("header")[0]).getElementsByTagName("span")[1]
        let paragraph = viewHolder.getElementsByClassName("text")[0]
        let scoreLabel = (viewHolder.getElementsByClassName("likes")[0]).getElementsByTagName("span")[0]

        let commentBtnDelete = viewHolder.getElementsByTagName("button")[0]
        let commentBtnReply = viewHolder.getElementsByTagName("button")[1]
        let commentBtnEdit = viewHolder.getElementsByTagName("button")[2]

        let commentBtnDeleteXs = viewHolder.getElementsByTagName("button")[3]
        let commentBtnReplyXs = viewHolder.getElementsByTagName("button")[4]
        let commentBtnEditXs = viewHolder.getElementsByTagName("button")[5]

        // let replyBtnSend = viewHolder.getElementsByTagName("button")[3]
        // let replyBtnDelete = viewHolder.getElementsByTagName("button")[4]
        // let replyBtnClose = viewHolder.getElementsByTagName("button")[5]

        if (this.currentUser.username === comment.user.username) {
            commentBtnDelete.classList = "show btn delete"
            commentBtnDeleteXs.classList = "show btn delete"
            commentBtnEdit.classList = "show btn secondary"
            commentBtnEditXs.classList = "show btn secondary"
            ownershipLabel.classList = "show"
            commentBtnReply.classList = "hide btn secondary"
            commentBtnReplyXs.classList = "hide btn secondary"
        } else {
            ownershipLabel.classList = "hide"
            commentBtnDelete.classList = "hide"
            commentBtnDeleteXs.classList = "hide"
            commentBtnEdit.classList = "hide"
            commentBtnEditXs.classList = "hide"
        }

        ownerAvatar.setAttribute("src", comment.user.image.webp)
        currentUserAvatar.setAttribute("src", this.currentUser.image.webp)
        userNameLabel.innerText = comment.user.username
        dateLabel.innerText = comment.createdAt
        paragraph.innerText = comment.content
        scoreLabel.innerText = comment.score
        this.renderReplies(viewHolder.getElementsByClassName("queue")[0], comment.replies)
        return viewHolder
    }

    renderReplies(repliesQueueLayout, repliesArray) {
        repliesArray.forEach((reply, index) => {
            repliesQueueLayout.appendChild(this.bindReplyViewHolder(reply, index, CommentQueue.replyViewHolder))
        })
    }

    bindReplyViewHolder(reply, index, strViewHolder) {
        let parser = new DOMParser()
        let viewHolder = parser.parseFromString(strViewHolder, "text/html").getElementById("reply-item-id")
        viewHolder.setAttribute("id", "reply-item-" + index)
        let ownerAvatar = (viewHolder.getElementsByClassName("content")[0]).getElementsByClassName("avatar")[0].getElementsByTagName("img")[0]
        let currentUserAvatar = (viewHolder.getElementsByClassName("new-reply")[0]).getElementsByClassName("avatar")[0]
        let userNameLabel = (viewHolder.getElementsByClassName("header")[0]).getElementsByTagName("h4")[0]
        let ownershipLabel = (viewHolder.getElementsByClassName("header")[0]).getElementsByTagName("span")[0]
        let dateLabel = (viewHolder.getElementsByClassName("header")[0]).getElementsByTagName("span")[1]
        let paragraph = viewHolder.getElementsByClassName("text")[0]
        let scoreLabel = (viewHolder.getElementsByClassName("likes")[0]).getElementsByTagName("span")[0]

        let commentBtnDelete = viewHolder.getElementsByTagName("button")[0]
        let commentBtnReply = viewHolder.getElementsByTagName("button")[1]
        let commentBtnEdit = viewHolder.getElementsByTagName("button")[2]

        let commentBtnDeleteXs = viewHolder.getElementsByTagName("button")[3]
        let commentBtnReplyXs = viewHolder.getElementsByTagName("button")[4]
        let commentBtnEditXs = viewHolder.getElementsByTagName("button")[5]

        // let replyBtnSend = viewHolder.getElementsByTagName("button")[3]
        // let replyBtnDelete = viewHolder.getElementsByTagName("button")[4]
        // let replyBtnClose = viewHolder.getElementsByTagName("button")[5]

        if (this.currentUser.username === reply.user.username) {
            commentBtnDelete.classList = "show btn delete"
            commentBtnDeleteXs.classList = "show btn delete"
            commentBtnEdit.classList = "show btn secondary"
            commentBtnEditXs.classList = "show btn secondary"
            ownershipLabel.classList = "show"
            commentBtnReply.classList = "hide btn secondary"
            commentBtnReplyXs.classList = "hide btn secondary"

        } else {
            ownershipLabel.classList = "hide"
            commentBtnDelete.classList = "hide"
            commentBtnDeleteXs.classList = "hide"
            commentBtnEdit.classList = "hide"
            commentBtnEditXs.classList = "hide"
        }

        ownerAvatar.setAttribute("src", reply.user.image.webp)
        currentUserAvatar.setAttribute("src", this.currentUser.image.webp)
        userNameLabel.innerText = reply.user.username
        dateLabel.innerText = reply.createdAt
        paragraph.innerText = reply.content
        scoreLabel.innerText = reply.score


        return viewHolder
    }

}

//todo : make sure to have one comment array located in the comment queue class
//todo : make sure to object model for the comment items


let currentUser = null
let comments = null
let commentQueue = null
let deleteBtn = null
let oldCommentContent = null
document.addEventListener("DOMContentLoaded", function () {
    document.getElementsByClassName("comments-queue")[0].innerHTML = renderLoader(3)
    if (document.readyState === "complete" || document.readyState === "interactive") {
        fetch("data.json")
            .then(response => response.text())
            .then(data => {
                data = JSON.parse(data)
                currentUser = data.currentUser
                comments = data.comments
                commentQueue = new CommentQueue(currentUser, document.getElementsByClassName("comments-queue")[0], comments)
            })
    }
})

function renderLoader(times) {
    let html = ""
    for (let i = 0; i < times; i++) {
        html += "<div class=\"comment\" style=\"margin: 10px 20px 0 20px\">\n" +
            "                <div class=\"likes skeleton display-sm\" style=''>\n" +
            "                    <div>\n" +
            "                        <i style=\"color: transparent\" class=\"fas fa-plus\"></i>\n" +
            "                        <span style=\"color: transparent\">12</span>\n" +
            "                        <i style=\"color: transparent\" class=\"fas fa-minus\"></i>\n" +
            "                    </div>\n" +
            "\n" +
            "                </div>\n" +
            "                <div class=\"content\">\n" +
            "\n" +
            "                    <div>\n" +
            "                        <div class=\"avatar skeleton xs\">\n" +
            "                        </div>\n" +
            "                        <div class=\"header\" style=\"width: calc(100% - 120px);\">\n" +
            "                            <h4 class=\"skeleton skeleton-text\" style=\" color: transparent;\">User name </h4>\n" +
            "\n" +
            "                        </div>\n" +
            "                        <div class='display-sm'>\n" +
            "                            <button name=\"comment-btn-edit\" class=\"btn skeleton secondary\" style=\"color: transparent\">\n" +
            "                                <i class=\"fas fa-pencil-alt\"></i>Edit\n" +
            "                            </button>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "\n" +
            "                    <p class=\"text\" >\n" +
            "                    <div class=\"skeleton skeleton-text\"></div>\n" +
            "                    <div class=\"skeleton skeleton-text\" style=\"width: 80%\"></div>\n" +
            "                    <div class=\"skeleton skeleton-text\" style=\"width: 70%\"></div>\n" +
            "                    <div class=\"skeleton skeleton-text\" style=\"width: 90%\"></div>\n" +
            "                    <div class=\"skeleton skeleton-text\" style=\"width: 60%\"></div>\n" +
            "                    </p>\n" +
            "                    <div class='display-xs'>\n" +
            "                        <div class=\"likes \" style='display: flex; justify-content: space-between; width: fit-content'>\n" +
            "                            <i style=\"color: transparent\" class=\"fas fa-plus\"></i>\n" +
            "                            <span style=\"color: transparent\">12</span>\n" +
            "                            <i style=\"color: transparent\" class=\"fas fa-minus\"></i>\n" +
            "                        </div>\n" +
            "                        <div style='display: flex'>\n" +
            "                            <button onclick=''class=\"btn skeleton secondary\" style=\"color: transparent\">\n" +
            "                                <i class=\"fas fa-pencil-alt\"></i>Edit\n" +
            "                            </button>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                </div>\n" +
            "            </div>\n"
    }
    return html
}

function submitComment(button) {
    let textArea = ((button.parentElement).parentElement).parentElement.getElementsByClassName("comment-area")[0]
    let text = textArea.innerText
    if (text.length === 0) return
    let comment = {
        "id": buildFakeId(comments),
        "content": text,
        "createdAt": "today",
        "score": 0,
        "user": {
            "image": {
                "png": currentUser.image.png,
                "webp": currentUser.image.webp
            },
            "username": currentUser.username
        },
        "replies": []
    }
    commentQueue.addComment(comment)
    textArea.innerText = "Enter your comment here ..."
    button.disabled = true
    window.scrollTo(0, document.body.scrollHeight); //todo : review this part

}

function buildFakeId(comments) {
    let commentLength = comments.length
    comments.forEach((comment => {
        commentLength += comment.replies.length
    }))
    return commentLength
}

function enableBtn(field) {
    let submitBtns = null
    let text = field.innerText
    if ((field.parentElement).parentElement.classList.toString() === "new-comment") {
        submitBtns = ((field.parentElement).parentElement).getElementsByTagName("button")
    } else {
        submitBtns = (field.parentElement).parentElement.getElementsByTagName("button")

    }
    if (text.length && (text !== "Enter your comment here ..." || text !== "Enter your reply here ...")) {
        for (let i = 0; i < submitBtns.length; i++) {
            submitBtns[i].disabled = false
        }
    } else {

        for (let i = 0; i < submitBtns.length; i++) {
            submitBtns[i].disabled = true
        }
        // submitBtns.forEach(button =>{
        //     button.disabled = true
        // });
    }

}

function editComment(button) {
    let commentItem = ((((button.parentElement).parentElement).parentElement).parentElement)
    let textArea = commentItem.querySelector(".comment-bloc .comment .content .text")
    oldCommentContent = textArea.innerText
    textArea.contentEditable = true
    textArea.focus()
}

function storeEditedComment(textArea) {
    let text = textArea.innerText
    textArea.contentEditable = false
    let commentIndex = ""
    let replyIndex = null
    if ((textArea.innerText.length === 0)) { // your're trying to replace the last comment's content with an empty content; so i wont allow it!!!!!
        textArea.innerText = oldCommentContent
    } else { //record the modifications
        if ((((textArea.parentElement).parentElement).parentElement).parentElement.classList.toString() === "queue") { //editing a reply
            commentIndex = getRootCommentIndex((((textArea.parentElement).parentElement).parentElement))
            replyIndex = parseInt(((textArea.parentElement).parentElement).parentElement.getAttribute("id").toString().split("-")[2])
            commentQueue.editComment(commentIndex, replyIndex, text)
        } else { //editing root comment
            commentIndex = getRootCommentIndex(((textArea.parentElement).parentElement).parentElement)
            commentQueue.editComment(commentIndex, replyIndex, text)
        }
    }
}


function replyToComment(button) {
    let commentItem = (((((button.parentElement).parentElement).parentElement).parentElement).parentElement)
    let checkbox = commentItem.querySelector(".comment-bloc input[type=checkbox]")
    let replyTextArea = commentItem.querySelector(".comment-bloc .new-reply .comment-area")
    showReplySection(checkbox)
    replyTextArea.setAttribute("autofocus", true)
}

function deleteComment(button) {
    let deleteModalToggle = document.getElementById("delete-modal-toggle")
    if (button !== null) {
        deleteBtn = button
        deleteModalToggle.checked = true
        return
    }
    let commentIndex = null
    let replyIndex = null
    if ((((((deleteBtn.parentElement).parentElement).parentElement).parentElement).parentElement).parentElement.classList.toString() === "queue") {
        commentIndex = getRootCommentIndex(((((deleteBtn.parentElement).parentElement).parentElement).parentElement).parentElement)
        replyIndex = parseInt(((((deleteBtn.parentElement).parentElement).parentElement).parentElement).parentElement.getAttribute("id").toString().split("-")[2])
        commentQueue.removeComment(commentIndex, replyIndex)
    } else {
        let commentIndex = getRootCommentIndex(((((deleteBtn.parentElement).parentElement).parentElement).parentElement).parentElement)
        commentQueue.removeComment(commentIndex, replyIndex)
    }
    deleteModalToggle.checked = false
}

function getRootCommentIndex(commentItem) {
    if (commentItem.parentElement.classList.toString() === "comment-item") {
        return parseInt(commentItem.parentElement.getAttribute("id").toString().split("-")[2])
    } else {
        return parseInt((((commentItem.parentElement).parentElement).parentElement).getAttribute("id").toString().split("-")[2])
    }
}

function sendReply(button) {
    let textArea = ((button.parentElement).parentElement).parentElement.querySelector(" div > .comment-area")
    let text = textArea.innerText
    if (text.length === 0) return
    let commentItem = (((button.parentElement).parentElement).parentElement).parentElement
    let ownerName = commentItem.querySelector(".comment .content .header h4").innerText
    let comment = {
        "id": buildFakeId(comments),
        "content": text,
        "createdAt": "today",
        "replyingTo": ownerName,
        "score": 0,
        "user": {
            "image": {
                "png": currentUser.image.png,
                "webp": currentUser.image.webp
            },
            "username": currentUser.username
        }
    }
    commentQueue.addReply(comment, getRootCommentIndex(commentItem))
    textArea.innerText = "Enter your comment here ..."
    button.disabled = true
    uncheckToggles()
}

function closeReplyEditer(button) {
    uncheckToggles()
}

function showReplySection(toggle) {
    uncheckToggles()
    toggle.checked = true
}

function uncheckToggles() {
    let toggles = document.getElementsByName("reply-section-toggle")
    toggles.forEach((toggle, index) => {
        toggle.checked = false
    })
}

function textAriaFocusIn(textArea) {
    let text = textArea.innerText
    let textEditoreClass = textArea.parentElement.classList.toString()
    if ((textEditoreClass === "new-comment" && text !== "Enter your comment here ...") || (textEditoreClass === "new-reply" && text !== "Enter your reply here ...")) return
    textArea.innerText = ""
}

function textAriaFocusOut(textArea) {
    let text = textArea.innerText
    let textEditoreClass = textArea.parentElement.classList.toString()
    if (text.length === 0 && textEditoreClass === "new-comment") textArea.innerText = "Enter your comment here ..."
    if (text.length === 0 && textEditoreClass === "new-reply") textArea.innerText = "Enter your reply here ..."
}

function increaseNote(button) {
    let commentOwner = null;
    let commentIndex = null
    let replyIndex = null
    if (((((button.parentElement).parentElement).parentElement).parentElement).parentElement.classList.toString() === "comment-item") {
        commentIndex = ((((button.parentElement).parentElement).parentElement).parentElement).parentElement.getAttribute("id").toString().split("-")[2]
        commentOwner = commentQueue.findCommentOwner(commentIndex, replyIndex)
    } else {
        commentIndex = ((((((button.parentElement).parentElement).parentElement).parentElement).parentElement).parentElement).parentElement.getAttribute("id").toString().split("-")[2]
        replyIndex = ((((button).parentElement).parentElement).parentElement).parentElement.getAttribute("id").toString().split("-")[2]
        commentOwner = commentQueue.findCommentOwner(commentIndex, replyIndex)
    }
    if (currentUser.username === commentOwner.username) return;
    if (commentQueue.increaseNote(commentIndex, replyIndex)) button.parentElement.getElementsByTagName("span")[0].innerText = parseInt(button.parentElement.getElementsByTagName("span")[0].innerText)+1
}

function decreaseNote(button) {
    let commentOwner = null;
    let commentIndex = null
    let replyIndex = null
    if (((((button.parentElement).parentElement).parentElement).parentElement).parentElement.classList.toString() === "comment-item") {
        commentIndex = ((((button.parentElement).parentElement).parentElement).parentElement).parentElement.getAttribute("id").toString().split("-")[2]
        commentOwner = commentQueue.findCommentOwner(commentIndex, replyIndex)
    } else {
        commentIndex = ((((((button.parentElement).parentElement).parentElement).parentElement).parentElement).parentElement).parentElement.getAttribute("id").toString().split("-")[2]
        replyIndex = ((((button).parentElement).parentElement).parentElement).parentElement.getAttribute("id").toString().split("-")[2]
        commentOwner = commentQueue.findCommentOwner(commentIndex, replyIndex)
    }
    if (currentUser.username === commentOwner.username) return;
    if (commentQueue.decreaseNote(commentIndex, replyIndex)) button.parentElement.getElementsByTagName("span")[0].innerText = parseInt(button.parentElement.getElementsByTagName("span")[0].innerText)-1
}