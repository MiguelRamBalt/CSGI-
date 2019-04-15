import { retrievePosts } from './actions/posts.actions';
import { GetPostsListSelector } from './app.selectors';
import './app.scss';


class AppController {
    constructor($ngRedux) {
        this.$ngRedux = $ngRedux;
        this.state = {};
    }

    $onInit() {
        this.controllerActions = {
            retrievePosts
        };

        this.disconnectRedux = this.$ngRedux.connect(this.mapStateToTarget, this.controllerActions)((state, actions) => {
            this.state = state;
            this.actions = actions;
        });

        this.actions.retrievePosts(response => {
            console.log('response:', response);
        });

        console.log(this);
    }

    mapStateToTarget(state) {
        return {
            postsList: GetPostsListSelector(state)
        }
    }

    $onDestroy() {
        this.disconnectRedux();
    }
}

export default {
    template: require('./app.template.html'),
    controller: AppController,
    bindings: {
        state: '<'
    }
}