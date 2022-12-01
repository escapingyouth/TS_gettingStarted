"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/todos', (req, res) => { });
router.post('/todos', (req, res) => { });
router.patch('/todos/:id', (req, res) => { });
router.delete('/todos/:id', (req, res) => { });
exports.default = router;
