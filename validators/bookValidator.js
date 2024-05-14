const { z, ZodError } = require("zod");
const express = require('express');

const reservationUserValidator = z.object({
    userName: z.string(),
    userId: z.string(),
});

const bookValidator = z.object({
    name: z.string().max(30),
    copiesLeft: z.number().int().positive(),
    description: z.string().max(100),
    reservedBy: z.array(reservationUserValidator),
});

export  default bookValidator;

