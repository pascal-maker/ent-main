package ent

import "github.com/lolopinto/ent/ent/viewer"

type ObjectWithPrivacyPolicy interface {
	GetPrivacyPolicy() PrivacyPolicy
}

type Entity interface {
	ObjectWithPrivacyPolicy
	// GetType returns the NodeType of this entity
	//	GetID() string // TODO uuid
	GetType() NodeType
	GetViewer() viewer.ViewerContext
	DBObject
}

// flag that we can't structScan and have to mapScan from db
// TODO figure this out if there's a better way of doing this
type dataEntityNotScannable interface {
	UnsupportedScan() bool
}

// Loader is used to load one or more ents
// Loader with no Load method... We need it to work for also efficiently loading multiple ents so one Load()
// API doesn't work
// This will also eventually support different loading mechanisms e.g. db, rest API, memory, etc
// For now, only postgres db is supported
type Loader interface {
	// Returns a new instance of the underlying object to be returned to the client for this loader
	// When a privacy backed loader, should return an Entity with ViewerContext of object set
	GetNewInstance() DBObject
	// Returns the schema of the ent.
	GetConfig() Config
}

// PrivacyBackedLoader is used when we want to apply privacy rules
// APIs that take this exxpect each instance of the ent returned by
// GetNewInstance() to be an Entity with the Viewer set to the same viewer
// passed to the ent API
// Done this way to have strong typing everywhere with no reflection.
// Automatically handled by the code generated by the framework so should
// only be annoying for very custom implementations
type PrivacyBackedLoader interface {
	Loader
	// Called for each ent returned by GetNewInstance to indicate tbe
	// result of applying the privacy rules to each ent.
	// Loaders should keep track of this and not GetNewInstance() so as
	// to not have privacy violations in returning non-privacy backed code
	// back to clients out of the ent framework
	// @param id string
	// @param ent DBObject (non-nil) if visible to the viewer
	// @param err error error loading given id e.g. user was blocked or just generic privacy error
	SetPrivacyResult(string, DBObject, error)
}

type LoaderWithDiffPrimaryKey interface {
	Loader
	GetPrimaryKey() string // for now only do single primary key
}

type DBFields map[string]func(interface{}) error

// DBObject references an item fetched from the database
// All ents are DBObjects but not all DBOjects are necessarily ents
// e.g. AssocEdge
// TODO rename to more generic name that's not DB only.
type DBObject interface {
	// TODO what happens for tables with composite primary keys??
	GetID() string
	DBFields() DBFields
}

// DBObjectWithDiffKey should be implemented to indicate that the primary key
// in the table isn't "id" but a different field.
// For now only supports single primary key so not exposing it publicly
// Only used for update at the moment
type DBObjectWithDiffKey interface {
	DBObject
	GetPrimaryKey() string // for now only do single primary key
}
