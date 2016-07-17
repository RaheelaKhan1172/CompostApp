import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { User } from '../imports/api/user';
import { CompostTypes } from '../imports/api/compostTypes';

Meteor.startup(() => {
  User.remove({});
  if (User.find({}).count() === 0) {
    var users = [
      {
        "userId": 1,
        "username": "jane",
        "role": "producer",
        "password": "password",
        "email": "jane@email.com",
        "street_address": "1217 48th st",
        "city": "sacramento",
        "state": "california",
        "zip": "94203",
        "lon": -121.44,
        "lat": 38.56,
        "packages": [
          {
            "uid": 1,
            "trackingId": "1234",
            "weight": 5,
            "deliveryDate": "07/15/16",
            "readyDate": "07/14/16",
            "compostTypes": [1] 
          },
          {
            "uid": 2,
            "trackingId": "1235",
            "weight": 6,
            "deliveryDate": null,
            "readyDate": null,
            "compostTypes": [1,2,3]
          }
        ]
      },
    {
      "userId": 2,
      "username": "dryver",
      "password": "password",
      "email": "dryver@email.com",
      "role": "transit",
      "packages": [
        {
          "uid": 1,
          "trackingId": "1234",
          "weight": 5,
          "deliveryDate": "07/15/16",
          "readyDate": "07/14/16",
          "compostTypes": [1]
        }
      ],
    }
  ];
  console.log(User.find().fetch());
  while (users.length) {
    console.log('hit', users.pop());
    User.insert(users.pop());
  }
}
  CompostTypes.remove({});
  if (CompostTypes.find().count() === 0) {
    var compost = [
      {
        "compostId":1,
        "name": "fruits and veggies",
        "image": "fruits-and-veggies.png"
      },
      {
        "compostId":2,
        "name":"meat and bones",
        "image": "meat-and-bones.png"
      },
      {
        "compostId":3,
        "name":"egg and shells",
        "image":"eggs-and-shells.png"
      }, 
      {
        "compostId":4,
        "name":"fish and shellfish",
        "image":"fish-and-shellfish.png"
      },
      {
        "compostId":5,
        "name":"grains and pasta",
        "image":"grain-and-pasta.png"
      },
      {
        "compostId":6,
        "name":"dairy products",
        "image":"dairy-products.png"
      },
      {
        "columnId":7,
        "name":"plate scrapings",
        "image":"plate-scrapings.png"
      },
      {
        "columnId":8,
        "name":"food, soiled paper and cardboard",
        "image":"food-soiled-paper-cardboard.png"
      },
      {
        "columnId":9,
        "name":"coffee filters, grounds and tea bags",
        "image":"coffee-filters-grounds-teabags.png"
      },
      {
        "columnId":10,
        "name": "yard waste",
        "image":"yard-waste.png"
      }
    ];
    while (compost.length > 0) {
      CompostTypes.insert(compost.pop());
    }
  }
});
