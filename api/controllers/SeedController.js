/**
 * SeedController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    
    seed: async function (req, res, next) {
        let faker = require('faker');
        let entries = 5;

        _.range(entries).forEach (async function (value, index) {
            let c = await Country.create({
                name: faker.address.country()
            });

            _.range(entries).forEach (async function (val, ind) {
                let s = await State.create({
                    name: faker.address.state(),
                    country: index + 1
                });

                _.range(entries).forEach (async function (v, i) {
                    let ci = await City.create({
                        name: faker.address.city(),
                        state: ind + 1
                    });
                });

            });
        });


        // console.log(faker.address.country(), faker.address.state(), faker.address.city());
        return res.ok();
    }
};

