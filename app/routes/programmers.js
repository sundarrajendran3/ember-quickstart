import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return ['Dave Thomas', 'Linus Torvalds', 'Grace Hopper', 'Donald Knuth'];
    }
});
