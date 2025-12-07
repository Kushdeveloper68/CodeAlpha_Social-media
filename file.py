arr = ["Login.jsx", "Signup.jsx", "Profile.jsx", "Settings.jsx","Explore.jsx", "PostDetails.jsx", "CreatePost.jsx", "FollowersFollowing.jsx", "NotFound.jsx"]

for file in arr:
    open(f"CodeAlpha_Social-media/frontend/src/pages/{file}", 'w').close()