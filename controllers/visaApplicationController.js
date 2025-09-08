// const VisaApplication = require('../models/VisaApplication');

// exports.getApplications = async (req, res, next) => {
//     try {
//         const apps = await VisaApplication.find();
//         res.json(apps);
//     } catch (err) { next(err); }
// };

// exports.createApplication = async (req, res, next) => {
//     try {
//         const newApp = new VisaApplication(req.body);
//         await newApp.save();
//         res.status(201).json(newApp);
//     } catch (err) { next(err); }
// };

// exports.updateApplication = async (req, res, next) => {
//     try {
//         const updatedApp = await VisaApplication.findByIdAndUpdate(
//             req.params.id,
//             req.body,
//             { new: true }
//         );
//         if (!updatedApp) return res.status(404).json({ message: 'Not found' });
//         res.json(updatedApp);
//     } catch (err) { next(err); }
// };

// exports.deleteApplication = async (req, res, next) => {
//     try {
//         const deleted = await VisaApplication.findByIdAndDelete(req.params.id);
//         if (!deleted) return res.status(404).json({ message: 'Not found' });
//         res.json({ success: true });
//     } catch (err) { next(err); }
// };
