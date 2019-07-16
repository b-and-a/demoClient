/**
 *
 */
  import {Sortable} from 'sortablejs';
  var el = document.getElementById('items');
  var sortable = Sortable.create(el);

  let sort = Sortable.create(simpleList, { /* options */ });

  // List with handle
  Sortable.create(listWithHandle, {
    handle: '.glyphicon-move',
    animation: 150
  });
