# Code generated by github.com/lolopinto/ent/ent, DO NOT edit. 

"""add event_invited_edges table

Revision ID: a4fb94adb813
Revises: 5736f5b2270e
Create Date: 2019-10-14 22:21:06.035209+00:00

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = 'a4fb94adb813'
down_revision = '5736f5b2270e'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('event_invited_edges',
    sa.Column('id1', postgresql.UUID(), nullable=False),
    sa.Column('id1_type', sa.Text(), nullable=False),
    sa.Column('edge_type', postgresql.UUID(), nullable=False),
    sa.Column('id2', postgresql.UUID(), nullable=False),
    sa.Column('id2_type', sa.Text(), nullable=False),
    sa.Column('time', sa.TIMESTAMP(), nullable=False),
    sa.Column('data', sa.Text(), nullable=True),
    sa.PrimaryKeyConstraint('id1', 'edge_type', 'id2', name='event_invited_edges_id1_edge_type_id2_pkey')
    )
    op.add_edges(
      [
        {'edge_name': 'EventToInvitedEdge', 'edge_type': '12a5ac62-1f9a-4fd7-b38f-a6d229ace12c', 'edge_table': 'event_invited_edges', 'symmetric_edge': False, 'inverse_edge_type': None},
      ]
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.remove_edges(
      [
        {'edge_name': 'EventToInvitedEdge', 'edge_type': '12a5ac62-1f9a-4fd7-b38f-a6d229ace12c', 'edge_table': 'event_invited_edges', 'symmetric_edge': False, 'inverse_edge_type': None},
      ]
    )
    op.drop_table('event_invited_edges')
    # ### end Alembic commands ###