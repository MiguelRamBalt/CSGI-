class PostsController {
    constructor($ngRedux, $scope, $rootScope) {
        this.$ngRedux = $ngRedux;
        this.$watch = $scope.$watch
        console.log(this.$ngRedux.getState().posts);
        console.log("this", this);
    }
    $onInit() {
        this.$ngRedux.subscribe(() => {
            let state = this.$ngRedux.getState();
            console.log("::", state.posts);
            this.state = state.posts.stateList

            console.log("this.state", this.state);
            //Will also display: {shortcode:"en",name:"English",english_name:"English"}
        });
    }
    savePosts() {

    }

}

export default {
    template: require('./posts.template.html'),
    controller: PostsController,
    bindings: {
        state: '='
    }
}