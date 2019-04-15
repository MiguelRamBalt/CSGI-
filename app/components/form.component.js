import { savePost } from '../actions/posts.actions';

class FormController {
    constructor($ngRedux) {
        this.$ngRedux = $ngRedux;
        this.state = {};
    }
    $onInit() {
        this.controllerActions = {
            savePost
        };

        this.disconnectRedux = this.$ngRedux.connect(null, this.controllerActions)((state, actions) => {
            this.actions = actions;
        });



        console.log(this);
    }
    update() {
        this.actions.savePost(this.user.name, this.user.author);
    }
}

export default {
    template: require('./form.template.html'),
    controller: FormController
}