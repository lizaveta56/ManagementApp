const events = require('../data/db/events.json');
const groups = require('../data/db/groups.json');
const users = require('../data/db/users.json');
const students = require('../data/db/students.json')


export default async (db) => {
    const dbUsers = await db['Users'].bulkCreate(users);
    const dbEvents = await db['Events'].bulkCreate(events);
    const dbGroups = await db['Groups'].bulkCreate(groups);
    const dbStudents = await db['Students'].bulkCreate(students);
};