// if the database is empty on server start, create some sample data.
// we create a separate bootstrap.users.js file
// because we'll be wanting to set up a number of patient-scenario test users

Meteor.startup(function () {
    if (Meteor.users.find().count() === 0) {
        console.info('no users in database!  adding some default users');

        var userId = null;

        // crate our administrator
        userId = Accounts.createUser({
            username: 'ada',
            password: 'ada',
            email: 'ada@test.org',
            profile: {
                name: 'Ada Lovelace',
                role: 'Administrator',
                gender: "Female",
                avatar: '/packages/clinical_accounts-famous-dead-people/avatars/ada.lovelace.jpg'
            }
        });
        console.info('Account created: ' + userId);

        userId = Accounts.createUser({
            username: 'alan',
            password: 'alan',
            email: 'alan@test.org',
            profile: {
                name: 'Alan Turing',
                role: 'Programmer',
                gender: "Male",
                avatar: '/packages/clinical_accounts-famous-dead-people/avatars/alan.turing.jpg'
            }
        });
        console.info('Account created: ' + userId);

        userId = Accounts.createUser({
            username: 'alexis',
            password: 'alexis',
            email: 'alexis@test.org',
            profile: {
                name: 'Alexis Carrel',
                role: 'Surgeon',
                gender: "Male",
                avatar: '/packages/clinical_accounts-famous-dead-people/avatars/alexis.carrel.jpg'
            }
        });
        console.info('Account created: ' + userId);

        userId = Accounts.createUser({
            username: 'doisy',
            password: 'doisy',
            email: 'doisy@test.org',
            profile: {
                name: 'Edward Doisy',
                role: 'Chemist',
                gender: "Male",
                avatar: '/packages/clinical_accounts-famous-dead-people/avatars/edward.doisy.jpg'
            }
        });
        console.info('Account created: ' + userId);

        userId = Accounts.createUser({
            username: 'tatum',
            password: 'tatum',
            email: 'tatum@test.org',
            profile: {
                name: 'Edward Tatum',
                role: 'Chemist',
                gender: "Male",
                avatar: '/packages/clinical_accounts-famous-dead-people/avatars/edward.tatum.jpg'
            }
        });
        console.info('Account created: ' + userId);

        userId = Accounts.createUser({
            username: 'florence',
            password: 'florence',
            email: 'florence@test.org',
            profile: {
                name: 'Florence Nightingale',
                role: 'Nurse',
                gender: "Female",
                avatar: '/packages/clinical_accounts-famous-dead-people/avatars/florence.nightingale.jpg'
            }
        });
        console.info('Account created: ' + userId);

        userId = Accounts.createUser({
            username: 'galen',
            password: 'galen',
            email: 'galen@test.org',
            profile: {
                name: 'Galen',
                role: 'Physician',
                gender: "Male",
                avatar: '/packages/clinical_accounts-famous-dead-people/avatars/galen.jpg'
            }
        });
        console.info('Account created: ' + userId);

        userId = Accounts.createUser({
            username: 'george',
            password: 'george',
            email: 'george@test.org',
            profile: {
                name: 'George Beadle',
                role: 'Geneticist',
                gender: "Male",
                avatar: '/packages/clinical_accounts-famous-dead-people/avatars/george.beadle.jpg'
            }
        });
        console.info('Account created: ' + userId);

        userId = Accounts.createUser({
            username: 'wald',
            password: 'wald',
            email: 'wald@test.org',
            profile: {
                name: 'George Wald',
                role: 'Opthamologist',
                gender: "Male",
                avatar: '/packages/clinical_accounts-famous-dead-people/avatars/george.wald.jpg'
            }
        });
        console.info('Account created: ' + userId);

        userId = Accounts.createUser({
            username: 'carver',
            password: 'carver',
            email: 'carver@test.org',
            profile: {
                name: 'George Washington Carver',
                role: 'Laboratory Chemist',
                gender: "Male",
                avatar: '/packages/clinical_accounts-famous-dead-people/avatars/george.washington.carver.jpg'
            }
        });
        console.info('Account created: ' + userId);

        userId = Accounts.createUser({
            username: 'hermann',
            password: 'hermann',
            email: 'hermann@test.org',
            profile: {
                name: 'Hermann Muller',
                role: 'Radiation Technologist',
                gender: "Male",
                avatar: '/packages/clinical_accounts-famous-dead-people/avatars/hermann.muller.jpg'
            }
        });
        console.info('Account created: ' + userId);

        userId = Accounts.createUser({
            username: 'hygea',
            password: 'hygea',
            email: 'hygea@test.org',
            profile: {
                name: 'Hygea',
                role: 'Scrub Nurse',
                gender: "Female",
                avatar: '/packages/clinical_accounts-famous-dead-people/avatars/hygea.jpg'
            }
        });
        console.info('Account created: ' + userId);

        userId = Accounts.createUser({
            username: 'james',
            password: 'james',
            email: 'james@test.org',
            profile: {
                name: 'James Watson',
                role: 'Geneticist',
                gender: "Male",
                avatar: '/packages/clinical_accounts-famous-dead-people/avatars/james.watson.jpg'
            }
        });
        console.info('Account created: ' + userId);

        userId = Accounts.createUser({
            username: 'eccles',
            password: 'eccles',
            email: 'eccles@test.org',
            profile: {
                name: 'Sir John Eccles',
                role: 'Neurologist',
                gender: "Male",
                avatar: '/packages/clinical_accounts-famous-dead-people/avatars/john.eccles.jpg'
            }
        });
        console.info('Account created: ' + userId);

        userId = Accounts.createUser({
            username: 'kurt',
            password: 'kurt',
            email: 'kurt@test.org',
            profile: {
                name: 'Kurt Vonnegut',
                role: 'Patient',
                gender: "Male",
                avatar: '/packages/clinical_accounts-famous-dead-people/avatars/kurt.vonnegut.jpg'
            }
        });
        console.info('Account created: ' + userId);

        userId = Accounts.createUser({
            username: 'curie',
            password: 'curie',
            email: 'curie@test.org',
            profile: {
                name: 'Madam Curie',
                role: 'Nuclear Physicist',
                gender: "Female",
                avatar: '/packages/clinical_accounts-famous-dead-people/avatars/madam.curie.jpg'
            }
        });
        console.info('Account created: ' + userId);

        userId = Accounts.createUser({
            username: 'mary',
            password: 'mary',
            email: 'mary@test.org',
            profile: {
                name: 'Mary Shelley',
                role: 'Patient',
                gender: "Female",
                avatar: '/packages/clinical_accounts-famous-dead-people/avatars/mary.shelley.jpg'
            }
        });
        console.info('Account created: ' + userId);

        userId = Accounts.createUser({
            username: 'teresa',
            password: 'teresa',
            email: 'teresa@test.org',
            profile: {
                name: 'Mother Teresa',
                role: 'Nurse',
                gender: "Female",
                avatar: '/packages/clinical_accounts-famous-dead-people/avatars/mother.teresa.jpg'
            }
        });
        console.info('Account created: ' + userId);

        userId = Accounts.createUser({
            username: 'octavia',
            password: 'octavia',
            email: 'octavia@test.org',
            profile: {
                name: 'Octavia Butler',
                role: 'Patient',
                gender: "Female",
                avatar: '/packages/clinical_accounts-famous-dead-people/avatars/octavia.butler.jpg'
            }
        });
        console.info('Account created: ' + userId);

        userId = Accounts.createUser({
            username: 'samuel',
            password: 'samuel',
            email: 'samuel@test.org',
            profile: {
                name: 'Samuel Clemens',
                role: 'Patient',
                gender: "Male",
                avatar: '/packages/clinical_accounts-famous-dead-people/avatars/samuel.clemens.jpg'
            }
        });
        console.info('Account created: ' + userId);

        userId = Accounts.createUser({
            username: 'rosalind',
            password: 'rosalind',
            email: 'rosalind@test.org',
            profile: {
                name: 'Rosalind Franklin',
                role: 'Laboratory Administrator',
                gender: "Female",
                avatar: '/packages/clinical_accounts-famous-dead-people/avatars/rosalind.franklin.jpg'
            }
        });
        console.info('Account created: ' + userId);


        userId = Accounts.createUser({
            username: 'nicola',
            password: 'nicola',
            email: 'nicola@test.org',
            profile: {
                name: 'Nicola Tesla',
                role: 'Electrical Engineer',
                gender: "Male",
                avatar: '/packages/clinical_accounts-famous-dead-people/avatars/nicola.tesla.jpg'
            }
        });
        console.info('Account created: ' + userId);

        userId = Accounts.createUser({
            username: 'grace',
            password: 'grace',
            email: 'grace@test.org',
            profile: {
                name: 'Grace Hopper',
                role: 'Administrator',
                gender: "Female",
                avatar: '/packages/clinical_accounts-famous-dead-people/avatars/grace.hopper.jpg'
            }
        });
        console.info('Account created: ' + userId);


        userId = Accounts.createUser({
            username: 'carl',
            password: 'carl',
            email: 'carl@test.org',
            profile: {
                name: 'Carl Gauss',
                role: 'MRI Researcher',
                gender: "Male",
                avatar: '/packages/clinical_accounts-famous-dead-people/avatars/carl.gauss.jpg'
            }
        });
        console.info('Account created: ' + userId);


        userId = Accounts.createUser({
            username: 'claude',
            password: 'claude',
            email: 'claude@test.org',
            profile: {
                name: 'Claude Shannon',
                role: 'Electrical Engineer',
                gender: "Male",
                avatar: '/packages/clinical_accounts-famous-dead-people/avatars/claude.shannon.jpg'
            }
        });
        console.info('Account created: ' + userId);

        userId = Accounts.createUser({
            username: 'barbara',
            password: 'barbara',
            email: 'barbara@test.org',
            profile: {
                name: 'Barbara McClintock',
                role: 'Cytogeneticist',
                gender: "Female",
                avatar: '/packages/clinical_accounts-famous-dead-people/avatars/barbara.mcclintock.jpg'
            }
        });
        console.info('Account created: ' + userId);


        userId = Accounts.createUser({
            username: 'gertrude',
            password: 'gertrude',
            email: 'gertrude@test.org',
            profile: {
                name: 'Gertrude Elion',
                role: 'Pharmacologist',
                gender: "Female",
                avatar: '/packages/clinical_accounts-famous-dead-people/avatars/gertrude.elion.jpg'
            }
        });
        console.info('Account created: ' + userId);

        userId = Accounts.createUser({
            username: 'rachel',
            password: 'rachel',
            email: 'rachel@test.org',
            profile: {
                name: 'Rachel Carson',
                role: 'Patient',
                gender: "Female",
                avatar: '/packages/clinical_accounts-famous-dead-people/avatars/rachel.carson.jpg'
            }
        });
        console.info('Account created: ' + userId);

        userId = Accounts.createUser({
            username: 'maria',
            password: 'maria',
            email: 'maria@test.org',
            profile: {
                name: 'Maria Mayer',
                role: 'Nuclear Physicist',
                gender: "Female",
                avatar: '/packages/clinical_accounts-famous-dead-people/avatars/maria.mayer.jpg'
            }
        });
        console.info('Account created: ' + userId);

        userId = Accounts.createUser({
            username: 'rita',
            password: 'rita',
            email: 'rita@test.org',
            profile: {
                name: 'Rita Levi-Montalcini',
                role: 'Neurologist',
                gender: "Female",
                avatar: '/packages/clinical_accounts-famous-dead-people/avatars/rita.levi.montalcini.jpg'
            }
        });
        console.info('Account created: ' + userId);

        userId = Accounts.createUser({
            username: 'elizabeth',
            password: 'elizabeth',
            email: 'elizabeth@test.org',
            profile: {
                name: 'Elizabeth Blackwell',
                role: 'Physician',
                gender: "Female",
                avatar: '/packages/clinical_accounts-famous-dead-people/avatars/elizabeth.blackwell.jpg'
            }
        });
        console.info('Account created: ' + userId);
    }
});
